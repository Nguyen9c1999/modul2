class PT {
    private a
    private b

    constructor(a, b?) {
        this.a = a;
        this.b = b;
    }


    public coNghiem():number{
        let x = -this.b/this.a
        return x
    }
    public ketQua():void{
        if (this.a != 0){
           console.log(this.coNghiem())
        }else if (this.a==0&&this.b==0){
            console.log(`vo so nghiem`)
        }else {
            console.log(`vo nghiem`)
        }
    }
}
let pt1 : PT = new PT(5,6)
pt1.ketQua()