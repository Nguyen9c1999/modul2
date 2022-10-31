"use strict";
exports.__esModule = true;
exports.OrderDetail = void 0;
var OrderDetail = /** @class */ (function () {
    function OrderDetail(id, customer, time) {
        this.cart = [];
        this.totalmoney = 0;
        this.id = id;
        this.customer = customer;
        this.time = time;
    }
    OrderDetail.prototype.addProduct = function (product) {
        this.cart.push(product);
        this.totalmoney += product.cost * product.quantity;
    };
    OrderDetail.prototype.displayCart = function () {
        return this.cart;
    };
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;
