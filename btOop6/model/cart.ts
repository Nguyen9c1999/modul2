import {Product} from "./product";
import {User} from "./user";

export class Cart{
    id:number
    user : User
    listProductCheck:Product []=[]

    total:number=0
    constructor(id) {
        this.id=id
    }
    add(product:Product){
        this.listProductCheck.push(product)
        this.total+= product.cost * product.quantity
    }
}