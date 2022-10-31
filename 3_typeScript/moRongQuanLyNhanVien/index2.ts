enum Gender {
    male1,
    female2,
    other3
}
class Employe{
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
let quanLyNhanVien : Employe[] =[];
function displayNhanVien(nhanVien:Employe):void{
    console.log(nhanVien)

}
function addNhanVien(nhanVien:Employe):void{
    quanLyNhanVien.push(nhanVien)
}
function hienThiDSNV(dS:Employe[]){
    for (let i of dS){
        console.log(i )
    }
}
function xoaNhanVien(index:number){
    for (let i = 0 ;i<=quanLyNhanVien.length;i++){
        if (i = index){
            quanLyNhanVien.splice(i,1)
        }
    }
}
let nhanVien2 = new Employe('nguyen',Gender.male1,'26-09-1999','@gmail',55555)
let nhanVien3 = new Employe('nguye',Gender.male1,'26-09-1999','@gmail',55555)
let nhanVien4 = new Employe('nguy',Gender.male1,'26-09-1999','@gmail',55555)
displayNhanVien(nhanVien2)
addNhanVien(nhanVien2)
addNhanVien(nhanVien3)
addNhanVien(nhanVien4)
hienThiDSNV(quanLyNhanVien)
xoaNhanVien(2)
hienThiDSNV(quanLyNhanVien)

