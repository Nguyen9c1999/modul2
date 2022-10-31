"use strict";
exports.__esModule = true;
exports.Product = void 0;
// Xây dựng menu quản lý bài toán bán hàng:
//     - crud sản phẩm
// - crud khách hàng
// - khách hàng có thể chọn mua sản phẩm với số lượng tuỳ chọn.
// - khi sản phẩm được mua thì trong danh sách được cập nhật  số lượng.
// - có thể in ra hoá đơn với các thông tin: tên khách, tên sản phẩm, số lượng sản phẩm, thời gian.
var Product = /** @class */ (function () {
    function Product(id, name, quantity, cost) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.cost = cost;
    }
    return Product;
}());
exports.Product = Product;
