"use strict";
exports.__esModule = true;
exports.ManagerOderDetail = void 0;
var ManagerOderDetail = /** @class */ (function () {
    function ManagerOderDetail() {
        this.listOrderDetail = [];
    }
    ManagerOderDetail.prototype.add = function (oderDetail) {
        this.listOrderDetail.push(oderDetail);
    };
    ManagerOderDetail.prototype["delete"] = function (id) {
        this.listOrderDetail.splice(this.findIndex(id), 1);
    };
    ManagerOderDetail.prototype.edit = function (id, oderDetail) {
        this.listOrderDetail[this.findIndex(id)] = oderDetail;
    };
    ManagerOderDetail.prototype.find = function (id) {
        var index = this.findIndex(id);
        return this.listOrderDetail[index];
    };
    ManagerOderDetail.prototype.findIndex = function (id) {
        for (var i = 0; i < this.listOrderDetail.length; i++) {
            if (this.listOrderDetail[i].id == id) {
                return i;
            }
        }
    };
    return ManagerOderDetail;
}());
exports.ManagerOderDetail = ManagerOderDetail;
