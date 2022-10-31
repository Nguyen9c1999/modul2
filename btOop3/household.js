"use strict";
exports.__esModule = true;
exports.Household = void 0;
var person_1 = require("./person");
var Household = /** @class */ (function () {
    function Household(adress, member) {
        this.houseHold = [];
        this.adress = adress;
        this.member = member;
        this.houseHold = [];
    }
    Household.prototype.add = function (person) {
        this.houseHold.push(person);
    };
    Household.prototype.display = function () {
        for (var _i = 0, _a = this.houseHold; _i < _a.length; _i++) {
            var value = _a[_i];
            console.log(value);
        }
    };
    Household.prototype.findId = function (id) {
        for (var i = 0; i < this.houseHold.length; i++) {
            if (this.houseHold[i].id == id) {
                return i;
            }
        }
    };
    Household.prototype.displayFindId = function (id) {
        console.log(this.houseHold[this.findId(id)]);
    };
    Household.prototype["delete"] = function (id) {
        this.houseHold.splice(this.findId(id), 1);
    };
    Household.prototype.fix = function (id, name, age, job) {
        this.houseHold[this.findId(id)] = new person_1.Person(id, name, age, job);
    };
    return Household;
}());
exports.Household = Household;
