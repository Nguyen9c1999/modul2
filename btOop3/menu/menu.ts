import {Person} from "../person";
import {Household} from "../household";
import {Neiberhood} from "../neiberhood";
let readlineSync = require('readline-sync');
function taoKhuPho(){
    let tenKhuPho = readlineSync.question('nhap ten khu pho can tao')
    let neiberhood = new Neiberhood(tenKhuPho)
    return neiberhood

}
function taoHoGiaDinh(){
    let diaChi = readlineSync.question('nhap dia chi ho gia dinh')
    let soThanhVien= readlineSync.question('nhap so thanh vien trong ho')
    let household = new Household(diaChi,soThanhVien)
    return household
}
function taoNguoi(){
    let id = readlineSync.question('nhap id người cần thêm')
    let ten = readlineSync.question('nhap tên người cần thêm')
    let tuoi = readlineSync.question('nhap tuôi người cần thêm')
    let congViec = readlineSync.question('nhap công việc của bạn')
    let nguoi = new Person(id,ten,tuoi,congViec)
    return nguoi
}
function taomenu(){
    console.log(`
    1.tạo khu phố
    2.tạo hộ gia đình
    3.tạo người
    4.thoat`)
}
function displayMenu(){
    console.log(`
 1.hiện thị hộ gia đình trong khu phố
 2.hiện thị người trong hộ ra đình`)
}

console.log(`
1. tạo 
2.display
3 sủa
4.xóa`)
let luaChon = readlineSync.question('nhap lua chon \n' )
if (luaChon==1){
    taomenu()
    let mangTenKhuPho:Neiberhood[]=[]
    let mangHoGiaDinh:Household[]=[]
    do {


        luaChon = +readlineSync.question('nhap lua chon \n')


        switch (luaChon) {
            case 1:
              mangTenKhuPho.push(  taoKhuPho())


                taomenu()
                break;
            case 2 :

                let tenKhuPho = readlineSync.question('nhap ten khu pho can tao ho gia dinh')
                for (let i = 0;i<mangTenKhuPho.length;i++){
                    if(mangTenKhuPho[i].name==tenKhuPho){
                        let a = taoHoGiaDinh()
                        mangTenKhuPho[i].add(a)
                        mangHoGiaDinh.push(a)
                        console.log('bạn đac nhập dung')

                    }else {
                        console.log('bạn đac nhập sai')
                    }
                }

                 taomenu()
                break;
            case 3 :
                 tenKhuPho = readlineSync.question('nhap ten khu pho can tao ho gia dinh')
                let diaChi = readlineSync.question('nhap dia chi can them nguoi')
                let soNguoi = +readlineSync.question('so nguoi can them')
                for (let i = 0;i<mangTenKhuPho.length;i++){
                    for (let j = 0 ;j<mangHoGiaDinh.length;j++){
                        if(mangTenKhuPho[i].name==tenKhuPho&&mangHoGiaDinh[i].adress==diaChi){
                            for (let i = 1;i<=soNguoi;i++)
                            mangHoGiaDinh[i].add(taoNguoi())
                        }

                    }
                }


        }
    }while (luaChon!=4)


}else if(luaChon==2){
    displayMenu()

}



