import {InterfaceManger} from "./interfaceManger";
import {Person} from "../model/person";
import {City} from "../model/city";

export class ManagerCity implements InterfaceManger<City>{
    listCity : City[]=[]
    add(city:City) {
        this.listCity.push(city)

    }

    display() {

    }

    inFor() {
    }

}