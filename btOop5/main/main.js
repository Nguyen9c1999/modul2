"use strict";
exports.__esModule = true;
var product_1 = require("../model/product");
var managerProduct_1 = require("../service/managerProduct");
var customer_1 = require("../model/customer");
var managerCustomer_1 = require("../service/managerCustomer");
var orderDetail_1 = require("../model/orderDetail");
var managerOderDetail_1 = require("../service/managerOderDetail");
var input = require('readline-sync');
var managerProduct = new managerProduct_1.ManagerProduct();
var managerCustomer = new managerCustomer_1.ManagerCustomer();
var managerOrderDetail = new managerOderDetail_1.ManagerOderDetail();
function mainMenu() {
    var menu = "-----Menu chinh-----\n1.Them, sua, xoa san pham\n2.Them khach hang\n3.Mua san pham\n4.Hien thi hoa don\n0.Thoat";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                menuSanPham();
                break;
            case 2:
                menuKhachHang();
                break;
            case 3:
                menuMuaHang();
                break;
            case 4:
                var idHoaDon = +input.question('Nhap id hoa don can in :  ');
                console.log(managerOrderDetail.find(idHoaDon));
                break;
        }
    } while (choice != 0);
}
mainMenu();
function menuSanPham() {
    var menuSanPham = "-----Menu San Pham-----\n1.Them san pham\n2.Sua San Pham\n3.Xoa San Pham\n4.Hien Thi toan bo SP\n0.Thoat";
    var choice;
    do {
        console.log(menuSanPham);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                addSanPham();
                break;
            case 2:
                editSanPham();
                break;
            case 3:
                deleteSanPham();
                break;
            case 4:
                console.log(managerProduct.displayProduct());
                break;
        }
    } while (choice != 0);
}
function addSanPham() {
    var id = +input.question('Nhap id cua san pham: ');
    var name = input.question('Nhap ten cua san pham: ');
    var quantity = +input.question('Nhap so luong san pham: ');
    var cost = +input.question('Nhap gia cua san pham');
    var product = new product_1.Product(id, name, quantity, cost);
    managerProduct.add(product);
}
function deleteSanPham() {
    var id = +input.question('Nhap id cua san pham: ');
    managerProduct["delete"](id);
}
function editSanPham() {
    var id = +input.question('Nhap id cua san pham : ');
    var name = input.question('Nhap ten cua san pham moi: ');
    var quantity = +input.question('Nhap so luong san pham moi: ');
    var cost = +input.question('Nhap gia cua san pham moi');
    var product = new product_1.Product(id, name, quantity, cost);
    managerProduct.edit(id, product);
}
//--------------------------------------------------------------------------
function menuKhachHang() {
    var menuKhachHang = "-----Menu San Pham-----\n1.Them KH\n2.Sua KH\n3.Xoa KH\n4.Hien Thi toan bo KH\n0.Thoat";
    var choice;
    do {
        console.log(menuKhachHang);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                addKhachHang();
                break;
            case 2:
                editKhachHang();
                break;
            case 3:
                deleteKhachHang();
                break;
            case 4:
                console.log(managerCustomer.listCustomer);
                break;
        }
    } while (choice != 0);
}
function addKhachHang() {
    var id = +input.question('Nhap id cua KH: ');
    var name = input.question('Nhap ten cua KH: ');
    var customer = new customer_1.Customer(name, id);
    managerCustomer.add(customer);
}
function deleteKhachHang() {
    var id = +input.question('Nhap id cua KH: ');
    managerCustomer["delete"](id);
}
function editKhachHang() {
    var id = +input.question('Nhap id cua KH: ');
    var name = input.question('Nhap ten cua KH: ');
    var customer = new customer_1.Customer(name, id);
    managerCustomer.edit(id, customer);
}
//--------------------------------------------------------------------------
function menuMuaHang() {
    var id = +input.question('Nhap id cua KH: ');
    if (managerCustomer.findIndex(id) == -1) {
        console.log('khach hang chua ton tại vui lòng nhập lại ');
    }
    else {
        var customer = managerCustomer.find(id);
        for (var i = 0; i < managerProduct.listProduct.length; i++) {
            console.log("id: ".concat(managerProduct.listProduct[i].id, " name: ").concat(managerProduct.listProduct[i].name));
        }
        id = +input.question('Nhap id cua san pham: ');
        var idOder = +input.question('Nhap id cua hoa don: ');
        var time = input.question('Nhap thoi gian mua hang: ');
        var amount = +input.question('Nhap so luong can mua: ');
        var orderDetail = new orderDetail_1.OrderDetail(idOder, customer, time);
        var product = managerProduct.find(id);
        product.quantity = amount;
        orderDetail.addProduct(product);
        managerOrderDetail.add(orderDetail);
        managerProduct.edit(id, new product_1.Product(product.id, product.name, product.quantity - amount, product.cost));
    }
}
