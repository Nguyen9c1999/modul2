"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Sach = void 0;
var taiLieu_1 = require("./taiLieu");
var Sach = /** @class */ (function (_super) {
    __extends(Sach, _super);
    function Sach(maTaiLieu, tacGia, soLuong, soTrang) {
        var _this = _super.call(this, maTaiLieu, tacGia, soLuong) || this;
        _this.tacGia = tacGia;
        _this.soTrang = soTrang;
        return _this;
    }
    return Sach;
}(taiLieu_1.TaiLieu));
exports.Sach = Sach;
