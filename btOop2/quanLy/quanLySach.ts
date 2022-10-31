import {QuanLy} from "../interface";
import {Sach} from "../taiLieu/sach";

export class QuanLySach implements QuanLy<Sach>{
    listQuanLy: Sach[]=[];


    add(taiLieu: Sach) {
        this.listQuanLy.push(taiLieu)
    }

    delete(maTaiLieu:number) {
        for (let i = 0 ;i<this.listQuanLy.length;i++){
            if (this.listQuanLy[i].maTaiLieu==maTaiLieu){
                this.listQuanLy.splice(i,1)
            }
        }
    }

    display() {
        for (let value of this.listQuanLy) {
            console.log(value)
        }

    }

    find(maTaiLieu:number) {
       for (let i = 0 ;i<this.listQuanLy.length;i++){
           if(this.listQuanLy[i].maTaiLieu==+maTaiLieu){
               console.log(this.listQuanLy[i])
           }
       }


    }

    out() {
    }

}
