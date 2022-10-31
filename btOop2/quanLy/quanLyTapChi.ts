import {QuanLy} from "../interface";
import {TapChi} from "../taiLieu/tapChi";
import {Sach} from "../taiLieu/sach";

export class QuanLyTapChi implements QuanLy<TapChi>{
    listQuanLy: TapChi[]=[];

    add(taiLieu: TapChi) {
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

    find() {
        for (let value of this.listQuanLy) {
            console.log(value)
        }


    }

    out() {
    }

}
