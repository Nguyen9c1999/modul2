import {Manager} from "./manger";
import {OrderDetail} from "../model/orderDetail";
import {Product} from "../model/product";

export class ManagerOderDetail implements Manager<OrderDetail>{

    listOrderDetail : OrderDetail[]=[]
    add(oderDetail: OrderDetail):void {
        this.listOrderDetail.push(oderDetail)
    }

    delete(id:number) {
        this.listOrderDetail.splice(this.findIndex(id),1)
    }

    edit(id:number,oderDetail: OrderDetail):void {
        this.listOrderDetail[this.findIndex(id)]=oderDetail
    }

    find(id:number) {
        let index = this.findIndex(id)
        return this.listOrderDetail[index]
    }
    findIndex(id:number):number{
        for (let i = 0; i <this.listOrderDetail.length ; i++) {
            if(this.listOrderDetail[i].id==id){
                return i
            }

        }
    }



}