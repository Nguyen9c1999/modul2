"use strict";
exports.__esModule = true;
exports.XuLyMenu = exports.quanLySach = exports.thongTinMenu = void 0;
var thongTinMenu_1 = require("./thongTinMenu");
var sach_1 = require("../taiLieu/sach");
var quanLySach_1 = require("../quanLy/quanLySach");
exports.thongTinMenu = new thongTinMenu_1.ThongTinMenu();
exports.quanLySach = new quanLySach_1.QuanLySach();
// thongTinMenu.menu()
// let readlineSync = require('readline-sync');
// let luaChon = readlineSync.question('lua chon cua ban la:  \n ');
// if(luaChon==1){
//     thongTinMenu.chonSach()
//
// }
// if (luaChon==2){
//     thongTinMenu.chonBao()
// }
// if (luaChon==3){
//     thongTinMenu.chonTapChi()
// }
var XuLyMenu = /** @class */ (function () {
    function XuLyMenu() {
    }
    XuLyMenu.prototype.xetLuaChon = function () {
        var readlineSync = require('readline-sync');
        var luaChon = readlineSync.question('lua chon cua ban la:  \n ');
        if (luaChon == 1) {
            this.chonSach();
        }
        if (luaChon == 2) {
            exports.thongTinMenu.chonBao();
        }
        if (luaChon == 3) {
            exports.thongTinMenu.chonTapChi();
        }
    };
    XuLyMenu.prototype.themSach = function () {
        var readlineSync = require('readline-sync');
        var maTaiLieu = readlineSync.question('nhap ma tai lieu:  \n ');
        // readlineSync = require('readline-sync');
        var tacGia = readlineSync.question('nhap ten tac gia:  \n ');
        // readlineSync = require('readline-sync');
        var soLuong = readlineSync.question('nhap so luon xuat ban:  \n ');
        // readlineSync = require('readline-sync');
        var soTrang = readlineSync.question('nhap so trang:  \n ');
        var sach = new sach_1.Sach(maTaiLieu, tacGia, soLuong, soTrang);
        return sach;
    };
    XuLyMenu.prototype.chonSach = function () {
        var readlineSync = require('readline-sync');
        var luaChon;
        do {
            exports.thongTinMenu.chonSach();
            luaChon = readlineSync.question('nhap lua chon  \n ');
            if (luaChon == 1) {
                exports.quanLySach.add(this.themSach());
            }
            else if (luaChon == 2) {
                console.log("--------------------------");
                var readlineSync_1 = require('readline-sync');
                var luaChon_1 = readlineSync_1.question('nhap ma tai lieu  \n ');
                exports.quanLySach.find(luaChon_1);
            }
            else if (luaChon == 3) {
                var readlineSync_2 = require('readline-sync');
                var luaChon_2 = readlineSync_2.question('nhap ma tai lieu  \n ');
                exports.quanLySach["delete"](luaChon_2);
            }
            else if (luaChon == 4) {
                console.log("--------------------------");
                exports.quanLySach.display();
            }
        } while (luaChon != 0);
    };
    return XuLyMenu;
}());
exports.XuLyMenu = XuLyMenu;
