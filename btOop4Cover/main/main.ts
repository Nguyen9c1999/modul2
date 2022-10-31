import {City} from "../model/city";
import {Person} from "../model/person";
import {ManagerPerson} from "../sevicer/managerPerson";
import {ManagerCity} from "../sevicer/managerCity";

let haNoi :City = new City(30,'Hà Nội',100)
let bacNinh :City = new City(99,'Bắc Ninh',90)
let bacGiang :City = new City(98,'Bắc Giang',80)
let hungYen :City = new City(89,'Hưng Yên',70)
let hCM :City = new City(50,'Hồ Chí Minh',60)
let managerPerson = new ManagerPerson()
let managerCity = new ManagerCity()
managerCity.add(haNoi)
managerCity.add(bacNinh)
managerCity.add(bacGiang)
managerCity.add(hungYen)
managerCity.add(hCM)

let input = require('readline-sync');
function start() {
    let menu = `---------Menu Thành Phố-----------\n1.Hà Nội\n2.Bắc Ninh\n3.Bắc Giang\n4.Hưng Yên\n5.Hồ Chí Minh\n0.Thoát`
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
function menuTinhNang(){
    let menuTinhNang = `---------------Các tùy chọn--------------\n1. Thêm Người\n2.Hiện thị ds nguồn\n3. hiện mã và dân số tỉnh\n0.thoát`
    console.log(menuTinhNang)
}
function menuHaNoi(){

    let choice
    do {
        menuTinhNang()
        choice = +input.question("Nhap lua chon cua ban: ");
        switch (choice) {
            case 1 :
                addPerson(haNoi)
                break;
            case 2:
                managerPerson.display(haNoi)

                break;
            case 3:
               managerCity.display(haNoi)
                break;

        }

    }while (choice != 0)



}



function addPerson(chonCity:City){
    let id = +input.question("Nhap id cua ban: ");
    let name = +input.question("Nhap ten cua ban: ");
    let age = +input.question("Nhap tuoi cua ban: ");
    let city : City = chonCity
    let person:Person = new Person(id,name,age,city)
    chonCity.population++
     managerPerson.add(person)




}
start()