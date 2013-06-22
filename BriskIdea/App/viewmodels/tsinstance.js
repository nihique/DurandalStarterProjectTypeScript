define(["require", "exports", 'durandal/system'], function(require, exports, __system__) {
    /// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />
    var system = __system__;

    var Welcome = (function () {
        function Welcome() {
            this.displayName = 'Welcome';
            this.description = 'Description';
            this.features = ['feature1', 'feature2'];
            this.random = Math.round(Math.random() * 100);
            system.log('test');
            debugger;
        }
        Welcome.prototype.viewAttached = function (view) {
        };
        return Welcome;
    })();
    exports.Welcome = Welcome;

    return new Welcome();
});
//@ sourceMappingURL=tsinstance.js.map
