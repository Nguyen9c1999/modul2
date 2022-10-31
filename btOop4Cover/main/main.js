"use strict";
exports.__esModule = true;
var city_1 = require("../model/city");
var person_1 = require("../model/person");
var managerPerson_1 = require("../sevicer/managerPerson");
var managerCity_1 = require("../sevicer/managerCity");
var haNoi = new city_1.City(30, 'Hà Nội', 100);
var bacNinh = new city_1.City(99, 'Bắc Ninh', 90);
var bacGiang = new city_1.City(98, 'Bắc Giang', 80);
var hungYen = new city_1.City(89, 'Hưng Yên', 70);
var hCM = new city_1.City(50, 'Hồ Chí Minh', 60);
var managerPerson = new managerPerson_1.ManagerPerson();
var managerCity = new managerCity_1.ManagerCity();
managerCity.add(haNoi);
managerCity.add(bacNinh);
managerCity.add(bacGiang);
managerCity.add(hungYen);
managerCity.add(hCM);
var input = require('readline-sync');
function start() {
    var menu = "---------Menu Th\u00E0nh Ph\u1ED1-----------\n1.H\u00E0 N\u1ED9i\n2.B\u1EAFc Ninh\n3.B\u1EAFc Giang\n4.H\u01B0ng Y\u00EAn\n4.H\u1ED3 Ch\u00ED Minh\n0.Tho\u00E1t";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Nhap lua chon cua ban: ");
        switch (choice) {
            case 1:
                menuHaNoi();
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
function menuTinhNang() {
    var menuTinhNang = "---------------C\u00E1c t\u00F9y ch\u1ECDn--------------\n1. Th\u00EAm Ng\u01B0\u1EDDi\n2.Hi\u1EC7n th\u1ECB ds ngu\u1ED3n\n3. hi\u1EC7n m\u00E3 v\u00E0 d\u00E2n s\u1ED1 t\u1EC9nh\n0.tho\u00E1t";
    console.log(menuTinhNang);
}
function menuHaNoi() {
    var choice;
    do {
        menuTinhNang();
        choice = +input.question("Nhap lua chon cua ban: ");
        switch (choice) {
            case 1:
                addPerson(haNoi);
                break;
            case 2:
                managerPerson.display(haNoi);
                break;
            case 3:
                managerCity.display(haNoi);
                break;
        }
    } while (choice != 0);
}
function addPerson(chonCity) {
    var id = +input.question("Nhap id cua ban: ");
    var name = +input.question("Nhap ten cua ban: ");
    var age = +input.question("Nhap tuoi cua ban: ");
    var city = chonCity;
    var person = new person_1.Person(id, name, age, city);
    chonCity.population++;
    managerPerson.add(person);
}
start();
