var NhanVien = /** @class */ (function () {
    function NhanVien(n, e, a) {
        this.name = n;
        this.email = e;
        this.age = a;
    }
    NhanVien.prototype.getName = function () {
        return this.name;
    };
    NhanVien.prototype.setName = function (a) {
        this.name = a;
    };
    return NhanVien;
}());
var nhanVien1 = new NhanVien('nguyen', 'nguyen9c', 19);
console.log(nhanVien1.getName());
nhanVien1.setName('haha');
console.log(nhanVien1.getName());
