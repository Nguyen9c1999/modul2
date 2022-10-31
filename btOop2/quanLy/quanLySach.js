"use strict";
exports.__esModule = true;
exports.QuanLySach = void 0;
var QuanLySach = /** @class */ (function () {
    function QuanLySach() {
        this.listQuanLy = [];
    }
    QuanLySach.prototype.add = function (taiLieu) {
        this.listQuanLy.push(taiLieu);
    };
    QuanLySach.prototype["delete"] = function (maTaiLieu) {
        for (var i = 0; i < this.listQuanLy.length; i++) {
            if (this.listQuanLy[i].maTaiLieu == maTaiLieu) {
                this.listQuanLy.splice(i, 1);
            }
        }
    };
    QuanLySach.prototype.display = function () {
        for (var _i = 0, _a = this.listQuanLy; _i < _a.length; _i++) {
            var value = _a[_i];
            console.log(value);
        }
    };
    QuanLySach.prototype.find = function (maTaiLieu) {
        for (var i = 0; i < this.listQuanLy.length; i++) {
            if (this.listQuanLy[i].maTaiLieu == +maTaiLieu) {
                console.log(this.listQuanLy[i]);
            }
        }
    };
    QuanLySach.prototype.out = function () {
    };
    return QuanLySach;
}());
exports.QuanLySach = QuanLySach;
