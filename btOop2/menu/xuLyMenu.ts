import {ThongTinMenu} from "./thongTinMenu";
import {Sach} from "../taiLieu/sach";
import {QuanLySach} from "../quanLy/quanLySach";

export let thongTinMenu : ThongTinMenu = new ThongTinMenu()
export let quanLySach = new QuanLySach()
// thongTinMenu.menu()
// let readlineSync = require('readline-sync');
// let luaChon = readlineSync.question('lua chon cua ban la:  \n ');
// if(luaChon==1){
//     thongTinMenu.chonSach()
//
// }
// if (luaChon==2){
//     thongTinMenu.chonBao()
// }
// if (luaChon==3){
//     thongTinMenu.chonTapChi()
// }

export class XuLyMenu{
    xetLuaChon(){
        let readlineSync = require('readline-sync');
        let luaChon = readlineSync.question('lua chon cua ban la:  \n ');
if(luaChon==1){
    this.chonSach()

}
if (luaChon==2){
    thongTinMenu.chonBao()
}
if (luaChon==3){
    thongTinMenu.chonTapChi()
}
    }
    themSach(){
        let readlineSync = require('readline-sync');
        let maTaiLieu:number = readlineSync.question('nhap ma tai lieu:  \n ');
       // readlineSync = require('readline-sync');
        let tacGia:string = readlineSync.question('nhap ten tac gia:  \n ');
       // readlineSync = require('readline-sync');
        let soLuong:number = readlineSync.question('nhap so luon xuat ban:  \n ');
        // readlineSync = require('readline-sync');
        let soTrang:number = readlineSync.question('nhap so trang:  \n ');
        let sach : Sach = new Sach(maTaiLieu,tacGia,soLuong,soTrang)
         return sach

    }
    chonSach(){
        let readlineSync = require('readline-sync');
        let luaChon;
        do {
            thongTinMenu.chonSach()
           luaChon = readlineSync.question('nhap lua chon  \n ');
           if (luaChon == 1) {
               quanLySach.add(this.themSach())



           } else if (luaChon == 2) {
               console.log("--------------------------");
               let readlineSync = require('readline-sync');
               let luaChon: number = readlineSync.question('nhap ma tai lieu  \n ');
               quanLySach.find(luaChon)

           } else if (luaChon == 3) {
               let readlineSync = require('readline-sync');
               let luaChon: number = readlineSync.question('nhap ma tai lieu  \n ');
               quanLySach.delete(luaChon)

           } else if (luaChon == 4) {
               console.log("--------------------------");
               quanLySach.display()

           }
       }while (luaChon != 0)

    }

}
