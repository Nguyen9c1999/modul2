"use strict";
exports.__esModule = true;
exports.Cadres = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["other"] = 2] = "other";
})(Gender = exports.Gender || (exports.Gender = {}));
var Cadres = /** @class */ (function () {
    function Cadres(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    return Cadres;
}());
exports.Cadres = Cadres;
