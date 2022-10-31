"use strict";
exports.__esModule = true;
exports.ManagerCustomer = void 0;
var ManagerCustomer = /** @class */ (function () {
    function ManagerCustomer() {
        this.listCustomer = [];
    }
    ManagerCustomer.prototype.add = function (customer) {
        this.listCustomer.push(customer);
    };
    ManagerCustomer.prototype["delete"] = function (id) {
        this.listCustomer.splice(this.findIndex(id), 1);
    };
    ManagerCustomer.prototype.edit = function (id, customer) {
        this.listCustomer[this.findIndex(id)] = customer;
    };
    ManagerCustomer.prototype.find = function (id) {
        var index = this.findIndex(id);
        return this.listCustomer[index];
    };
    ManagerCustomer.prototype.findIndex = function (id) {
        for (var i = 0; i < this.listCustomer.length; i++) {
            if (this.listCustomer[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    ManagerCustomer.prototype.displayCustomer = function () {
        return this.listCustomer;
    };
    return ManagerCustomer;
}());
exports.ManagerCustomer = ManagerCustomer;
