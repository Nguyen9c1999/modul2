"use strict";
exports.__esModule = true;
exports.ManagerProduct = void 0;
var ManagerProduct = /** @class */ (function () {
    function ManagerProduct() {
        this.listProduct = [];
    }
    ManagerProduct.prototype.add = function (product) {
        this.listProduct.push(product);
    };
    ManagerProduct.prototype["delete"] = function (id) {
        this.listProduct.splice(this.findIndex(id), 1);
    };
    ManagerProduct.prototype.edit = function (id, product) {
        this.listProduct[this.findIndex(id)] = product;
    };
    ManagerProduct.prototype.find = function (id) {
        var index = this.findIndex(id);
        return this.listProduct[index];
    };
    ManagerProduct.prototype.findIndex = function (id) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                return i;
            }
        }
    };
    ManagerProduct.prototype.displayProduct = function () {
        return this.listProduct;
    };
    return ManagerProduct;
}());
exports.ManagerProduct = ManagerProduct;
