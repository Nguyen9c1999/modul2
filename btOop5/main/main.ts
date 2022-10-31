import {Product} from "../model/product";
import {ManagerProduct} from "../service/managerProduct";
import {Customer} from "../model/customer";
import {ManagerCustomer} from "../service/managerCustomer";
import {OrderDetail} from "../model/orderDetail";
import {ManagerOderDetail} from "../service/managerOderDetail";

let input = require('readline-sync');
let managerProduct : ManagerProduct = new ManagerProduct()
let managerCustomer : ManagerCustomer = new ManagerCustomer()
let managerOrderDetail : ManagerOderDetail = new ManagerOderDetail()
function mainMenu() {
    let menu = `-----Menu chinh-----\n1.Them, sua, xoa san pham\n2.Them khach hang\n3.Mua san pham\n4.Hien thi hoa don\n0.Thoat`
    let choice;

    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                 menuSanPham()
                break;
            case 2:
                 menuKhachHang()
                break;
            case 3:
                menuMuaHang()
                 break;
            case 4:
                let idHoaDon =+input.question('Nhap id hoa don can in :  ');
                console.log( managerOrderDetail.find(idHoaDon))
                break;
        }
    } while (choice != 0)


}
mainMenu()
function menuSanPham(){
    let menuSanPham=`-----Menu San Pham-----\n1.Them san pham\n2.Sua San Pham\n3.Xoa San Pham\n4.Hien Thi toan bo SP\n0.Thoat`
    let choice;

    do {
        console.log(menuSanPham);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                addSanPham()
                break;
            case 2:
               editSanPham()
                break;
            case 3:
                deleteSanPham()
                break;
            case 4:
                console.log(managerProduct.displayProduct())

                break;

        }
    } while (choice != 0)

}
function addSanPham(){
    let id = +input.question('Nhap id cua san pham: ');
    let name = input.question('Nhap ten cua san pham: ');
    let quantity = +input.question('Nhap so luong san pham: ');
    let cost = +input.question('Nhap gia cua san pham');
    let product : Product = new Product(id,name,quantity,cost)
    managerProduct.add(product)

}
function deleteSanPham(){
    let id = +input.question('Nhap id cua san pham: ');
    managerProduct.delete(id)
}
function editSanPham(){
    let id = +input.question('Nhap id cua san pham : ');
    let name = input.question('Nhap ten cua san pham moi: ');
    let quantity = +input.question('Nhap so luong san pham moi: ');
    let cost = +input.question('Nhap gia cua san pham moi');
    let product : Product = new Product(id,name,quantity,cost)
    managerProduct.edit(id,product)

}


//--------------------------------------------------------------------------
function menuKhachHang(){
    let menuKhachHang=`-----Menu San Pham-----\n1.Them KH\n2.Sua KH\n3.Xoa KH\n4.Hien Thi toan bo KH\n0.Thoat`
    let choice;

    do {
        console.log(menuKhachHang);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                addKhachHang()
                break;
            case 2:
                editKhachHang()
                break;
            case 3:
                deleteKhachHang()
                break;
            case 4:
                console.log(managerCustomer.listCustomer)

                break;

        }
    } while (choice != 0)

}
function addKhachHang(){
    let id = +input.question('Nhap id cua KH: ');
    let name = input.question('Nhap ten cua KH: ');

    let customer :Customer  = new Customer(name,id)
    managerCustomer.add(customer)

}
function deleteKhachHang(){
    let id = +input.question('Nhap id cua KH: ');
    managerCustomer.delete(id)
}
function editKhachHang(){
    let id = +input.question('Nhap id cua KH: ');
    let name = input.question('Nhap ten cua KH: ');

    let customer :Customer  = new Customer(name,id)
    managerCustomer.edit(id,customer)

}
//--------------------------------------------------------------------------

function menuMuaHang(){
    let id = +input.question('Nhap id cua KH: ');
    if(managerCustomer.findIndex(id)==-1){
        console.log('khach hang chua ton tại vui lòng nhập lại ')
    }else {
       let customer= managerCustomer.find(id)
        for (let i =0 ;i<managerProduct.listProduct.length;i++){
            console.log(`id: ${managerProduct.listProduct[i].id} name: ${managerProduct.listProduct[i].name}`)
        }
         id = +input.question('Nhap id cua san pham: ');
        let idOder = +input.question('Nhap id cua hoa don: ');
        let time = input.question('Nhap thoi gian mua hang: ');
        let amount =+input.question('Nhap so luong can mua: ');
        let orderDetail = new OrderDetail(idOder,customer,time)
        let product = managerProduct.find(id)
        managerProduct.edit(id,new Product(product.id,product.name,product.quantity-amount,product.cost))
        product.quantity=amount
        orderDetail.addProduct(product)
        managerOrderDetail.add(orderDetail)



    }
}


