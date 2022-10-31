import {Manager} from "./manager";
import {Cart} from "../model/cart";

export class ManagerCart implements Manager<Cart>{
    listCart :Cart []=[]
    add(t: Cart) {
        this.listCart.push(t)
    }

    delete(id: number) {
    }

    edit(id: number, t: Cart) {
    }

    find(id: number) {
    }

}