define(["require", "exports", 'durandal/http', 'durandal/app'], function(require, exports, __http__, __app__) {
    var http = __http__;
    var app = __app__;

    var Flickr = (function () {
        function Flickr() {
            this.displayName = 'Flickr';
            this.images = ko.observableArray();
        }
        Flickr.prototype.activate = function () {
            var _this = this;
            if (this.images().length > 0)
                return;
            var query = { tags: 'mount ranier', tagmode: 'any', format: 'json' };
            return http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', query, 'jsoncallback').then(function (response) {
                return _this.images(response.items);
            });
        };

        Flickr.prototype.select = function (item) {
            item.viewUrl = 'views/detail';
            app.showModal(item);
        };

        Flickr.prototype.canDeactivate = function () {
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        };
        return Flickr;
    })();
    exports.Flickr = Flickr;

    return new Flickr();
});
//@ sourceMappingURL=flickr.js.map
