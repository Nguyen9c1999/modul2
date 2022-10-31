import {Manager} from "./manager";
import {Product} from "../model/product";

export class ManagerProduct implements Manager<Product>{
    listProduct : Product[]=[]
    add(product: Product):void {
        this.listProduct.push(product)
    }

    delete(id:number) {
        this.listProduct.splice(this.findIndex(id),1)
    }

    edit(id:number,product:Product):void {
        this.listProduct[this.findIndex(id)]=product
    }

    find(id:number) {
        let index = this.findIndex(id)
        return this.listProduct[index]
    }
    findIndex(id:number):number{
        for (let i = 0; i <this.listProduct.length ; i++) {
            if(this.listProduct[i].id==id){
                return i
            }

        }
    }
    displayProduct(){
        return this.listProduct
    }

}