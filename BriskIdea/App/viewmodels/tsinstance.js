define(["require", "exports", 'durandal/system', '../model/person'], function(require, exports, __system__, __person__) {
    var system = __system__;
    var person = __person__;

    var Welcome = (function () {
        function Welcome() {
            this.displayName = 'Welcome';
            this.description = 'Description';
            this.features = ['feature1', 'feature2'];
            this.random = Math.round(Math.random() * 100);
            this.person = new person.Person('Martin', 'Kovarik');
        }
        Welcome.prototype.activate = function () {
            system.log('activate ts instance');
        };
        return Welcome;
    })();
    exports.Welcome = Welcome;

    return new Welcome();
});
//@ sourceMappingURL=tsinstance.js.map
