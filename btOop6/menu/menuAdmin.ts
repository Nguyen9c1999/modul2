import {ManagerUser} from "../service/managerUser";
import {Product} from "../../btOop5/model/product";
import {ManagerProduct} from "../service/managerProduct";
import {User} from "../model/user";

export let managerUser : ManagerUser = new ManagerUser()
export let managerProduct :ManagerProduct = new ManagerProduct()
export class MenuAdmin {
    input = require('readline-sync');

    menuAdmin() {
        let menu = `-----Menu Admin-----\n1.Manager User\n2.Manager product\n3.Log out\n0.Thoat`
        let choice;

        do {
            console.log(menu);
            choice = +this.input.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case 1:
                       this.menuUser()
                    break;
                case 2:
                      this.menuProduct()
                    break;
                case 3:

                    break;

            }
        } while (choice != 0)


    }
    menuUser(){
        let menuManagerUser=`-----Menu manager User-----\n1.Show List\n2.Lock\n3.UnLock\n0.Thoat `
        let choice;

        do {
            console.log(menuManagerUser);
            choice = +this.input.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case 1:
                    console.log(managerUser.display())
                    break;
                case 2:
                    let choiceIdUser = +this.input.question('Nhap id cua nguoi dung can khoa: ')
                    managerUser.lock(choiceIdUser)

                    break;
                case 3:
                     choiceIdUser = +this.input.question('Nhap id cua nguoi dung can khoa: ')
                    managerUser.unLock(choiceIdUser)
                    break;


            }
        } while (choice != 0)

    }
    menuProduct(){
        let menuSanPham=`-----Menu San Pham-----\n1.Them san pham\n2.Sua San Pham\n3.Xoa San Pham\n4.Hien Thi toan bo SP\n0.Thoat`
        let choice;

        do {
            console.log(menuSanPham);
            choice = +this.input.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case 1:
                       this.addProduct()
                    break;
                case 2:
                       this.editSanPham()
                    break;
                case 3:
                      this.deleteSanPham()
                    break;
                case 4:
                    console.log(managerProduct.displayProduct())

                    break;

            }
        } while (choice != 0)

    }
    addProduct(){
        let id = +this.input.question('Nhap id cua san pham: ');
        let name = this.input.question('Nhap ten cua san pham: ');
        let quantity = +this.input.question('Nhap so luong san pham: ');
        let cost = +this.input.question('Nhap gia cua san pham');
        let product : Product = new Product(id,name,quantity,cost)
        managerProduct.add(product)

    }
    deleteSanPham(){
        let id = +this.input.question('Nhap id cua san pham: ');
        managerProduct.delete(id)
    }
    editSanPham(){
        let id = +this.input.question('Nhap id cua san pham : ');
        let name = this.input.question('Nhap ten cua san pham moi: ');
        let quantity = +this.input.question('Nhap so luong san pham moi: ');
        let cost = +this.input.question('Nhap gia cua san pham moi');
        let product : Product = new Product(id,name,quantity,cost)
        managerProduct.edit(id,product)

    }
}
let menuAdmin = new MenuAdmin()
let user = new User(1,'1')
let user2 = new User(2,'2')
let user3 = new User(3,'3')
managerUser.add(user)
managerUser.add(user2)
managerUser.add(user3)


