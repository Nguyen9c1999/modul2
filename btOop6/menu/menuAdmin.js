"use strict";
exports.__esModule = true;
exports.MenuAdmin = exports.managerProduct = exports.managerUser = void 0;
var managerUser_1 = require("../service/managerUser");
var product_1 = require("../../btOop5/model/product");
var managerProduct_1 = require("../service/managerProduct");
var user_1 = require("../model/user");
exports.managerUser = new managerUser_1.ManagerUser();
exports.managerProduct = new managerProduct_1.ManagerProduct();
var MenuAdmin = /** @class */ (function () {
    function MenuAdmin() {
        this.input = require('readline-sync');
    }
    MenuAdmin.prototype.menuAdmin = function () {
        var menu = "-----Menu Admin-----\n1.Manager User\n2.Manager product\n3.Log out\n0.Thoat";
        var choice;
        do {
            console.log(menu);
            choice = +this.input.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case 1:
                    this.menuUser();
                    break;
                case 2:
                    this.menuProduct();
                    break;
                case 3:
                    break;
            }
        } while (choice != 0);
    };
    MenuAdmin.prototype.menuUser = function () {
        var menuManagerUser = "-----Menu manager User-----\n1.Show List\n2.Lock\n3.UnLock\n0.Thoat ";
        var choice;
        do {
            console.log(menuManagerUser);
            choice = +this.input.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case 1:
                    console.log(exports.managerUser.display());
                    break;
                case 2:
                    var choiceIdUser = +this.input.question('Nhap id cua nguoi dung can khoa: ');
                    exports.managerUser.lock(choiceIdUser);
                    break;
                case 3:
                    choiceIdUser = +this.input.question('Nhap id cua nguoi dung can khoa: ');
                    exports.managerUser.unLock(choiceIdUser);
                    break;
            }
        } while (choice != 0);
    };
    MenuAdmin.prototype.menuProduct = function () {
        var menuSanPham = "-----Menu San Pham-----\n1.Them san pham\n2.Sua San Pham\n3.Xoa San Pham\n4.Hien Thi toan bo SP\n0.Thoat";
        var choice;
        do {
            console.log(menuSanPham);
            choice = +this.input.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case 1:
                    this.addProduct();
                    break;
                case 2:
                    this.editSanPham();
                    break;
                case 3:
                    this.deleteSanPham();
                    break;
                case 4:
                    console.log(exports.managerProduct.displayProduct());
                    break;
            }
        } while (choice != 0);
    };
    MenuAdmin.prototype.addProduct = function () {
        var id = +this.input.question('Nhap id cua san pham: ');
        var name = this.input.question('Nhap ten cua san pham: ');
        var quantity = +this.input.question('Nhap so luong san pham: ');
        var cost = +this.input.question('Nhap gia cua san pham');
        var product = new product_1.Product(id, name, quantity, cost);
        exports.managerProduct.add(product);
    };
    MenuAdmin.prototype.deleteSanPham = function () {
        var id = +this.input.question('Nhap id cua san pham: ');
        exports.managerProduct["delete"](id);
    };
    MenuAdmin.prototype.editSanPham = function () {
        var id = +this.input.question('Nhap id cua san pham : ');
        var name = this.input.question('Nhap ten cua san pham moi: ');
        var quantity = +this.input.question('Nhap so luong san pham moi: ');
        var cost = +this.input.question('Nhap gia cua san pham moi');
        var product = new product_1.Product(id, name, quantity, cost);
        exports.managerProduct.edit(id, product);
    };
    return MenuAdmin;
}());
exports.MenuAdmin = MenuAdmin;
var menuAdmin = new MenuAdmin();
var user = new user_1.User(1, '1');
var user2 = new user_1.User(2, '2');
var user3 = new user_1.User(3, '3');
exports.managerUser.add(user);
exports.managerUser.add(user2);
exports.managerUser.add(user3);
