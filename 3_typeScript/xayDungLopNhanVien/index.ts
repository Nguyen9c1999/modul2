class NhanVien{
    name : string;
    email : string;
    age : number;
    constructor(n,e,a ) {
        this.name = n
        this.email = e
        this.age = a
    }
    getName():string{
        return this.name
    }
    setName(a:string):void{
        this.name = a
    }

}
let nhanVien1 : NhanVien = new NhanVien('nguyen','nguyen9c',19)
console.log(nhanVien1.getName())
nhanVien1.setName('haha')
console.log(nhanVien1.getName())
