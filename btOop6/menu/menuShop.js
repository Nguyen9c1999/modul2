"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.MenuShop = void 0;
var menuAdmin_1 = require("./menuAdmin");
var MenuShop = /** @class */ (function () {
    function MenuShop() {
        this.input = require('readline-sync');
    }
    MenuShop.prototype.menuShop = function () {
        var menu1 = "-----Menu Shop-----\n1.Mua S\u1EAFm\n2.Gi\u1ECF h\u00E0ng c\u1EE7a t\u00F4i\n3.L\u1ECBch s\u1EED\n0.Thoat";
        var choice;
        do {
            console.log(menu1);
            choice = +this.input.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case 1:
                    this.menuMuaSam();
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }
        } while (choice != 0);
    };
    MenuShop.prototype.menuMuaSam = function () {
        var menuMuaSam = "-----Menu mua sam-----\n1.Hien thi DS\nS\u1EAFp X\u1EBFp theo gi\u00E1\n3.T\u00ECm theo t\u00EAn g\u1EA7n \u0111\u00FAng\n4.T\u00ECm theo kho\u1EA3ng gi\u00E1\n5.Mua theo id\n0.Thoat ";
        var choice;
        do {
            console.log(menuMuaSam);
            choice = +this.input.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case 1:
                    console.log(menuAdmin_1.managerProduct.displayProduct());
                    break;
                case 2:
                    console.log(this.sapXepTheoGia());
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
            }
        } while (choice != 0);
    };
    MenuShop.prototype.sapXepTheoGia = function () {
        var listProductSaXep = __spreadArray([], menuAdmin_1.managerProduct.listProduct, true);
        for (var i = 0; i < listProductSaXep.length; i++) {
            for (var j = i + 1; j < listProductSaXep.length; j++) {
                if (listProductSaXep[i].cost < listProductSaXep[j].cost) {
                    var tam = listProductSaXep[i];
                    listProductSaXep[i] = listProductSaXep[j];
                    listProductSaXep[j] = tam;
                }
            }
        }
        return listProductSaXep;
    };
    return MenuShop;
}());
exports.MenuShop = MenuShop;
var menuShop = new MenuShop();
console.log(1);
menuShop.menuShop();
