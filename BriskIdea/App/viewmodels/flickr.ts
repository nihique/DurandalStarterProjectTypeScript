/// <reference path="../reference.ts" />
import http = require('durandal/http');
import app = require('durandal/app');

export interface Image {
    viewUrl: string;
}

export class Flickr {
    displayName = 'Flickr';
    images = ko.observableArray<Image>();

    activate() {
        if (this.images().length > 0) return;
        var query = { tags: 'mount ranier', tagmode: 'any', format: 'json' };
        return http
            .jsonp('http://api.flickr.com/services/feeds/photos_public.gne', query, 'jsoncallback')
            .then(response => this.images(response.items));
    }

    select(item: Image) {
        item.viewUrl = 'views/detail';
        app.showModal(item);
    }

    canDeactivate() {
        return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
    }
}

return new Flickr();