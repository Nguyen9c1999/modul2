import {Product} from "./product";
import {User} from "./user";
import {Cart} from "./cart";

export class OrderDetail{
    id:number
    userDone : User
    listProductDone : Product[] =[]
    time:string
    totalDone:number
    add(cart:Cart){
        this.id = cart.id
        this.userDone = cart.user
        this.listProductDone = cart.listProductCheck
        this.totalDone = cart.total
    }
}