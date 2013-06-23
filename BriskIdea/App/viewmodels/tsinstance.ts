/// <reference path="../reference.ts" />
import system = require('durandal/system');
import person = require('../model/person');

export class TsInstance {

    displayName: string;
    description: string;
    random: number;
    features: Array<string>;
    person: person.Person;

    constructor() {
        system.log('constructor()', this);
        this.displayName = 'Welcome';
        this.description = 'Description';
        this.features = ['feature1', 'feature2'];
        this.random = Math.round(Math.random() * 100)
        this.person = new person.Person('Martin', 'Kovarik');
    }
}

return new TsInstance();
