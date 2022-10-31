// Một nhân viên bao gồm các thông tin sau:
//
//     Họ tên
//
// Giới tính (Giá trị chấp nhận: Nam, Nữ, Khác)
//
// Ngày sinh
//
// Email
//
// Số điện thoại (không bắt buộc)
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["other"] = 2] = "other";
})(Gender || (Gender = {}));
var SinhVien = /** @class */ (function () {
    function SinhVien(name, gender, birthday, email, phoneNumber) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return SinhVien;
}());
var employeeList = [];
employeeList.push(new SinhVien('nguyen', Gender.male, '26-09-1999', '@gmail', 55555));
employeeList.push(new SinhVien('haha', Gender.male, '26-09-1999', '@gmail', 55555));
var display1 = function (sinhVien) {
    console.log(sinhVien);
};
employeeList.forEach(display1);
