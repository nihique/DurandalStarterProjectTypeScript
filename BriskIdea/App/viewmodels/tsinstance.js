define(["require", "exports", 'durandal/system', '../model/person'], function(require, exports, __system__, __person__) {
    var system = __system__;
    var person = __person__;

    var TsInstance = (function () {
        function TsInstance() {
            system.log('constructor()', this);
            this.displayName = 'Welcome';
            this.description = 'Description';
            this.features = ['feature1', 'feature2'];
            this.random = Math.round(Math.random() * 100);
            this.person = new person.Person('Martin', 'Kovarik');
        }
        return TsInstance;
    })();
    exports.TsInstance = TsInstance;

    return new TsInstance();
});
//@ sourceMappingURL=tsinstance.js.map
