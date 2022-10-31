"use strict";
exports.__esModule = true;
exports.ThongTinMenu = void 0;
var ThongTinMenu = /** @class */ (function () {
    function ThongTinMenu() {
    }
    ThongTinMenu.prototype.menu = function () {
        console.log(("Chọn loại tai lieu!"));
        console.log(("---------Menu---------"));
        console.log(("1.Sach"));
        console.log("2.Bao");
        console.log("3.Tap chi");
        // console.log("0.Thoát");
    };
    ThongTinMenu.prototype.chonSach = function () {
        console.log("--------------------------");
        console.log("Chào mừng bạn đến quản lý Sach :)))");
        console.log("---------Menu Sach---------");
        console.log("1.Thêm thông tin sach");
        console.log("2.Tìm kiếm thông tin sach");
        // console.log("3.Sửa thông tin xe máy");
        console.log("3.Xóa sach khỏi danh sách");
        console.log("4.In danh sách Sach");
        console.log("0.Thoát");
    };
    ThongTinMenu.prototype.chonBao = function () {
        console.log("--------------------------");
        console.log("Chào mừng bạn đến quản lý Báo :)))");
        console.log("---------Menu Báo---------");
        console.log("1.Thêm thông tin Báo");
        console.log("2.Tìm kiếm thông tin Báo");
        // console.log("3.Sửa thông tin xe máy");
        console.log("3.Xóa xe máy khỏi danh sách");
        console.log("4.In danh sách Báo");
        // console.log("0.Thoát");
    };
    ThongTinMenu.prototype.chonTapChi = function () {
        console.log("--------------------------");
        console.log("Chào mừng bạn đến quản lý Tạp Chí :)))");
        console.log("---------Menu Tạp Chí---------");
        console.log("1.Thêm thông tin Tạp Chí");
        console.log("2.Tìm kiếm thông tin Tạp Chí");
        // console.log("3.Sửa thông tin xe máy");
        console.log("3.Xóa xe máy khỏi danh sách");
        console.log("4.In danh sách Tạp Chí");
        // console.log("0.Thoát");
    };
    return ThongTinMenu;
}());
exports.ThongTinMenu = ThongTinMenu;
