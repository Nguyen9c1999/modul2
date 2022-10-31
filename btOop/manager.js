"use strict";
exports.__esModule = true;
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager() {
        this.listCadres = [];
    }
    Manager.prototype.add = function (cadres) {
        this.listCadres.push(cadres);
    };
    Manager.prototype.display = function () {
        for (var _i = 0, _a = this.listCadres; _i < _a.length; _i++) {
            var value = _a[_i];
            console.log(value);
        }
    };
    Manager.prototype.find = function (name) {
        for (var i = 0; i < this.listCadres.length; i++) {
            if (name === this.listCadres[i].name) {
                console.log(this.listCadres[i]);
            }
        }
    };
    return Manager;
}());
exports.Manager = Manager;
