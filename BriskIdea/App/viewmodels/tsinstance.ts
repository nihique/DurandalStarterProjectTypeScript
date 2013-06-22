/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />
import system = require('durandal/system');

export class Welcome {

    displayName: string;
    description: string;
    random: number;
    features: Array<string>;

    constructor() {
        this.displayName = 'Welcome';
        this.description = 'Description';
        this.features = ['feature1', 'feature2'];
        this.random = Math.round(Math.random() * 100)
        system.log('test');
        debugger;
    }

    public viewAttached(view) {
    }
}

return new Welcome();
