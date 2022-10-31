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
enum Gender {
    male,
    female,
    other
}
class SinhVien{
    name : string
    gender:Gender
    birthday : string
    email : string
    phoneNumber ? : number


    constructor(name: string, gender: Gender, birthday: string, email: string, phoneNumber: number) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
let employeeList: SinhVien[] = []
employeeList.push(new SinhVien('nguyen',Gender.male,'26-09-1999','@gmail',55555))
employeeList.push(new SinhVien('haha',Gender.male,'26-09-1999','@gmail',55555))
let display1 = (sinhVien : SinhVien)=>{
    console.log(sinhVien)
}
employeeList.forEach(display1)
