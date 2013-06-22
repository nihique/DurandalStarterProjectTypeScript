define(["require", "exports"], function(require, exports) {
    var Welcome = (function () {
        function Welcome() {
            this.displayName = 'Welcome';
            this.description = 'Description';
            this.random = Math.round(Math.random() * 100);
            this.features = ['feature1', 'feature2'];
        }
        Welcome.prototype.viewAttached = function (view) {
        };
        return Welcome;
    })();
    exports.Welcome = Welcome;

    return Welcome;
});
//@ sourceMappingURL=tsctor.js.map
