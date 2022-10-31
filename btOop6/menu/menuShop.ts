import {managerProduct} from "./menuAdmin";


export class MenuShop{
    input = require('readline-sync');
    menuShop(){
        let menu1 = `-----Menu Shop-----\n1.Mua Sắm\n2.Giỏ hàng của tôi\n3.Lịch sử\n0.Thoat`
        let choice;

        do {
            console.log(menu1);
            choice = +this.input.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case 1:
                      this.menuMuaSam()
                    break;
                case 2:

                    break;
                case 3:

                    break;
                case 4:


                    break;
            }
        } while (choice != 0)


    }
    menuMuaSam(){
        let menuMuaSam = `-----Menu mua sam-----\n1.Hien thi DS\nSắp Xếp theo giá\n3.Tìm theo tên gần đúng\n4.Tìm theo khoảng giá\n5.Mua theo id\n0.Thoat `
        let choice;

        do {
            console.log(menuMuaSam);
            choice = +this.input.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case 1:
                    console.log(managerProduct.displayProduct())
                    break;
                case 2:
                    console.log(this.sapXepTheoGia())

                    break;
                case 3:

                    break;
                case 4:

                    break;
                case 5:

                    break;


            }
        } while (choice != 0)


    }
    sapXepTheoGia(){
        let listProductSaXep = [...managerProduct.listProduct]
        for (let i = 0; i <listProductSaXep.length ; i++) {
            for(let j = i+1;j < listProductSaXep.length;j++)
            {
                if(listProductSaXep[i].cost < listProductSaXep[j].cost)
                {
                    let tam = listProductSaXep[i];
                    listProductSaXep[i] = listProductSaXep[j];
                    listProductSaXep[j] = tam;
                }
            }
        }
        return listProductSaXep
    }
}
let menuShop:MenuShop = new MenuShop()
console.log(1)
