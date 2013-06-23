define(["require", "exports", 'durandal/system'], function(require, exports, __system__) {
    var system = __system__;

    var Welcome = (function () {
        function Welcome() {
            system.log(system.getModuleId(this), 'constructor', this);
            this.displayName = 'Welcome to the Durandal Starter Kit!';
            this.description = 'Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make Single Page Applications (SPAs) easy to create and maintain.';
            this.features = [
                'Clean MV* Architecture',
                'JS & HTML Modularity',
                'Simple App Lifecycle',
                'Eventing, Modals, Message Boxes, etc.',
                'Navigation & Screen State Management',
                'Consistent Async Programming w/ Promises',
                'App Bundling and Optimization',
                'Use any Backend Technology',
                'Built on top of jQuery, Knockout & RequireJS',
                'Integrates with other libraries such as SammyJS & Bootstrap',
                'Make jQuery & Bootstrap widgets templatable and bindable (or build your own widgets).'
            ];
        }
        return Welcome;
    })();
    exports.Welcome = Welcome;

    return Welcome;
});
//@ sourceMappingURL=welcome.js.map
