import {Manager} from "./manager";
import {OrderDetail} from "../model/orderDetail";

export class ManagerOrderDetaill implements Manager<OrderDetail>{
    listOrderDetail:OrderDetail[]=[]
    add(t: OrderDetail) {
        this.listOrderDetail.push(t)
    }

    delete(id: number) {
    }

    edit(id: number, t: OrderDetail) {
    }

    find(id: number) {
    }

}