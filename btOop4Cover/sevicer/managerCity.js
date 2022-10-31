"use strict";
exports.__esModule = true;
exports.ManagerCity = void 0;
var ManagerCity = /** @class */ (function () {
    function ManagerCity() {
        this.listCity = [];
    }
    ManagerCity.prototype.add = function (city) {
        this.listCity.push(city);
    };
    ManagerCity.prototype.display = function (city) {
        for (var i = 0; i < this.listCity.length; i++) {
            if (this.listCity[i].id == city.id) {
                console.log("id c\u1EE7a th\u00E0nh ph\u1ED1 l\u00E0 ".concat(this.listCity[i].id, " c\u00F3 ").concat(this.listCity[i].population));
            }
        }
    };
    ManagerCity.prototype.inFor = function () {
    };
    return ManagerCity;
}());
exports.ManagerCity = ManagerCity;
