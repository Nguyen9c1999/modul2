import {City} from "./model/city";
import {Person} from "./model/person";

let haNoi :City = new City(30,'Hà Nội',100)
let bacNinh :City = new City(99,'Bắc Ninh',90)
let bacGiang :City = new City(98,'Bắc Giang',80)
let hungYen :City = new City(89,'Hưng Yên',70)
let hCM :City = new City(50,'Hồ Chí Minh',60)
let input = require('readline-sync');
function start() {
    let menu = `---------Menu Thành Phố-----------\n1.Hà Nội\n2.Bắc Ninh\n3.Bắc Giang\n4.Hưng Yên\nHồ Chí Minh\n0.Thoát`
    let choice;
    do {
        console.log(menu);
        choice =  + input.question("Nhap lua chon cua ban: ");

        switch (choice) {
            case 1:
                menuHaNoi()
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            case 5:
                break;
        }
    } while (choice != 0);
}
function menuTinh(){
    let menuHaNoi = `---------------Các tùy chọn--------------\n1. Thêm Người\n2.Hiện thị ds nguồn\n3. hiện mã và dân số tỉnh`
    console.log(menuHaNoi)
}
function menuHaNoi() {

    let choice
    do {
        menuTinh()
         choice = +input.question("Nhap lua chon cua ban: ");
        switch (choice) {
            case 1 :
                haNoi.add(addPerson())
                break;
            case 2:
                haNoi.displayList()
                break;
            case 3:
                console.log(haNoi.showId()+" id so dan")
                console.log( haNoi.showPopulation())
                break;

        }

    }while (choice != 0)



}
function addPerson(){
    let id = +input.question("Nhap id cua ban: ");
    let name = +input.question("Nhap ten cua ban: ");
    let age = +input.question("Nhap tuoi cua ban: ");
   let person:Person = new Person(id,name,age)
    return person



}
start()