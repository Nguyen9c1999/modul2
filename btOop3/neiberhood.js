"use strict";
exports.__esModule = true;
exports.Neiberhood = void 0;
var household_1 = require("./household");
var Neiberhood = /** @class */ (function () {
    function Neiberhood(name) {
        this.name = name;
        this.neiberhood = [];
    }
    Neiberhood.prototype.add = function (household) {
        this.neiberhood.push(household);
    };
    Neiberhood.prototype.display = function () {
        for (var _i = 0, _a = this.neiberhood; _i < _a.length; _i++) {
            var value = _a[_i];
            console.log(value);
        }
    };
    Neiberhood.prototype.findId = function (adress) {
        for (var i = 0; i < this.neiberhood.length; i++) {
            if (this.neiberhood[i].adress == adress) {
                return i;
            }
        }
    };
    Neiberhood.prototype["delete"] = function (adress) {
        this.neiberhood.splice(this.findId(adress), 1);
    };
    Neiberhood.prototype.fix = function (adress, newAdress, member) {
        this.neiberhood[this.findId(adress)] = new household_1.Household(newAdress, member);
    };
    Neiberhood.prototype.findMember = function (member) {
        for (var i = 0; i < this.neiberhood.length; i++) {
            if (this.neiberhood[i].member > member) {
                console.log(this.neiberhood[i].adress);
            }
        }
    };
    Neiberhood.prototype.findNameAndNeiberhood = function (name) {
        for (var i = 0; i < this.neiberhood.length; i++) {
            if (this.neiberhood[i].houseHold[i].name == name) {
                console.log(this.neiberhood[i].adress);
            }
        }
    };
    Neiberhood.prototype.displayFindId = function (adress) {
        console.log(this.neiberhood[this.findId(adress)]);
    };
    return Neiberhood;
}());
exports.Neiberhood = Neiberhood;
