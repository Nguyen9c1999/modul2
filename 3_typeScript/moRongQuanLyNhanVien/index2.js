var Gender;
(function (Gender) {
    Gender[Gender["male1"] = 0] = "male1";
    Gender[Gender["female2"] = 1] = "female2";
    Gender[Gender["other3"] = 2] = "other3";
})(Gender || (Gender = {}));
var Employe = /** @class */ (function () {
    function Employe(name, gender, birthday, email, phoneNumber) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employe;
}());
var quanLyNhanVien = [];
function displayNhanVien(nhanVien) {
    console.log(nhanVien);
}
function addNhanVien(nhanVien) {
    quanLyNhanVien.push(nhanVien);
}
function hienThiDSNV(dS) {
    for (var _i = 0, dS_1 = dS; _i < dS_1.length; _i++) {
        var i = dS_1[_i];
        console.log(i);
    }
}
function xoaNhanVien(index) {
    for (var i = 0; i <= quanLyNhanVien.length; i++) {
        if (i = index) {
            quanLyNhanVien.splice(i, 1);
        }
    }
}
var nhanVien2 = new Employe('nguyen', Gender.male1, '26-09-1999', '@gmail', 55555);
var nhanVien3 = new Employe('nguye', Gender.male1, '26-09-1999', '@gmail', 55555);
var nhanVien4 = new Employe('nguy', Gender.male1, '26-09-1999', '@gmail', 55555);
displayNhanVien(nhanVien2);
addNhanVien(nhanVien2);
addNhanVien(nhanVien3);
addNhanVien(nhanVien4);
hienThiDSNV(quanLyNhanVien);
xoaNhanVien(2);
hienThiDSNV(quanLyNhanVien);
