"use strict";
exports.__esModule = true;
var person_1 = require("../person");
var household_1 = require("../household");
var neiberhood_1 = require("../neiberhood");
var readlineSync = require('readline-sync');
function taoKhuPho() {
    var tenKhuPho = readlineSync.question('nhap ten khu pho can tao');
    var neiberhood = new neiberhood_1.Neiberhood(tenKhuPho);
    return neiberhood;
}
function taoHoGiaDinh() {
    var diaChi = readlineSync.question('nhap dia chi ho gia dinh');
    var soThanhVien = readlineSync.question('nhap so thanh vien trong ho');
    var household = new household_1.Household(diaChi, soThanhVien);
    return household;
}
function taoNguoi() {
    var id = readlineSync.question('nhap id người cần thêm');
    var ten = readlineSync.question('nhap tên người cần thêm');
    var tuoi = readlineSync.question('nhap tuôi người cần thêm');
    var congViec = readlineSync.question('nhap công việc của bạn');
    var nguoi = new person_1.Person(id, ten, tuoi, congViec);
    return nguoi;
}
function taomenu() {
    console.log("\n    1.t\u1EA1o khu ph\u1ED1\n    2.t\u1EA1o h\u1ED9 gia \u0111\u00ECnh\n    3.t\u1EA1o ng\u01B0\u1EDDi\n    4.thoat");
}
function displayMenu() {
    console.log("\n 1.hi\u1EC7n th\u1ECB h\u1ED9 gia \u0111\u00ECnh trong khu ph\u1ED1\n 2.hi\u1EC7n th\u1ECB ng\u01B0\u1EDDi trong h\u1ED9 ra \u0111\u00ECnh");
}
console.log("\n1. t\u1EA1o \n2.display\n3 s\u1EE7a\n4.x\u00F3a");
var luaChon = readlineSync.question('nhap lua chon \n');
if (luaChon == 1) {
    taomenu();
    var mangTenKhuPho = [];
    var mangHoGiaDinh = [];
    do {
        luaChon = +readlineSync.question('nhap lua chon \n');
        switch (luaChon) {
            case 1:
                mangTenKhuPho.push(taoKhuPho());
                taomenu();
                break;
            case 2:
                var tenKhuPho = readlineSync.question('nhap ten khu pho can tao ho gia dinh');
                for (var i = 0; i < mangTenKhuPho.length; i++) {
                    if (mangTenKhuPho[i].name == tenKhuPho) {
                        var a = taoHoGiaDinh();
                        mangTenKhuPho[i].add(a);
                        mangHoGiaDinh.push(a);
                        console.log('bạn đac nhập dung');
                    }
                    else {
                        console.log('bạn đac nhập sai');
                    }
                }
                taomenu();
                break;
            case 3:
                tenKhuPho = readlineSync.question('nhap ten khu pho can tao ho gia dinh');
                var diaChi = readlineSync.question('nhap dia chi can them nguoi');
                var soNguoi = +readlineSync.question('so nguoi can them');
                for (var i = 0; i < mangTenKhuPho.length; i++) {
                    for (var j = 0; j < mangHoGiaDinh.length; j++) {
                        if (mangTenKhuPho[i].name == tenKhuPho && mangHoGiaDinh[i].adress == diaChi) {
                            for (var i_1 = 1; i_1 <= soNguoi; i_1++)
                                mangHoGiaDinh[i_1].add(taoNguoi());
                        }
                    }
                }
        }
    } while (luaChon != 4);
}
else if (luaChon == 2) {
    displayMenu();
}
