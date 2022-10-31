import {Manager} from "./manger";
import {Customer} from "../model/customer";
import {Product} from "../model/product";

export class ManagerCustomer implements Manager<Customer>{
    listCustomer:Customer[]=[]
    add(customer: Customer):void {
        this.listCustomer.push(customer)
    }

    delete(id:number) {
        this.listCustomer.splice(this.findIndex(id),1)
    }

    edit(id:number,customer: Customer):void {
        this.listCustomer[this.findIndex(id)]=customer
    }

    find(id:number) {
        let index = this.findIndex(id)
        return this.listCustomer[index]
    }
    findIndex(id:number):number{
        for (let i = 0; i <this.listCustomer.length ; i++) {
            if(this.listCustomer[i].id==id){
                return i
            }

        }
        return -1
    }
    displayCustomer(){
        return this.listCustomer
    }

}