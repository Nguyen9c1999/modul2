import {ThongTinMenu} from "./thongTinMenu";

let readlineSync = require('readline-sync');
class BookMenu{
    // menu = `
    // Chon tai lieu
    // ---------menu--------
    // 1. chon ...
    // 2. sdasdasd
    // `
    // printMenu(){
    //     console.log(this.menu);
    // }
    thongTinMenu:ThongTinMenu = new ThongTinMenu()
    selectMenu(){
        let luaChon:number = readlineSync.question("Chon option: ")

            if(luaChon==1){
                this.thongTinMenu.chonSach()

            }
            if (luaChon==2){
                this.thongTinMenu.chonBao()
            }
            if (luaChon==3){
                this.thongTinMenu.chonTapChi()
            }



        }
}