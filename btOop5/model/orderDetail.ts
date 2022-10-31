import {Customer} from "./customer";
import {Product} from "./product";

export class OrderDetail{
    id:number
    customer : Customer
    time:string
    cart : Product[]=[]
    totalmoney:number=0

    constructor(id: number, customer: Customer, time: string) {
        this.id = id;
        this.customer = customer;
        this.time = time;
    }
    addProduct(product:Product):void{
        this.cart.push(product)
        this.totalmoney+=product.cost*product.quantity
    }
    displayCart(){
        return this.cart
    }

}