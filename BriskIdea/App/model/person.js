define(["require", "exports"], function(require, exports) {
    var Person = (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person.prototype.fullName = function () {
            return this.firstName + ' ' + this.lastName;
        };
        return Person;
    })();
    exports.Person = Person;
});
//@ sourceMappingURL=person.js.map
