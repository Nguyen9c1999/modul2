import {InterfaceManger} from "./interfaceManger";
import {Person} from "../model/person";
import {City} from "../model/city";

export class ManagerCity implements InterfaceManger<City>{
    listCity : City[]=[]
    add(city:City) {
        this.listCity.push(city)

    }

    display(city:City) {
        for (let i = 0;i<this.listCity.length;i++){
            if(this.listCity[i].id==city.id){
                console.log(`id của thành phố là ${this.listCity[i].id} có ${this.listCity[i].population}`)
            }
        }

    }

    inFor() {

    }

}