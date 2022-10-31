"use strict";
exports.__esModule = true;
exports.ManagerPerson = void 0;
var ManagerPerson = /** @class */ (function () {
    function ManagerPerson() {
        this.listPerson = [];
    }
    ManagerPerson.prototype.add = function (person) {
        this.listPerson.push(person);
    };
    ManagerPerson.prototype.display = function (city) {
        for (var i = 0; i < this.listPerson.length; i++) {
            if (this.listPerson[i].city == city) {
                console.log("".concat(i + 1, ". name-").concat(this.listPerson[i].name, " id-").concat(this.listPerson[i].id, " age-").concat(this.listPerson[i].age, " "));
            }
        }
    };
    ManagerPerson.prototype.inFor = function () {
    };
    return ManagerPerson;
}());
exports.ManagerPerson = ManagerPerson;
