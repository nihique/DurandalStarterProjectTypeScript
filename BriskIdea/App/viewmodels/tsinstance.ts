/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />
import system = require('durandal/system');
import person = require('../model/person');

export class Welcome {

    displayName: string;
    description: string;
    random: number;
    features: Array<string>;
    person: person.Person;

    constructor() {
        this.displayName = 'Welcome';
        this.description = 'Description';
        this.features = ['feature1', 'feature2'];
        this.random = Math.round(Math.random() * 100)
        this.person = new person.Person('Martin', 'Kovarik');
    }

    public activate() {
        system.log('activate ts instance');
    }
}

return new Welcome();
