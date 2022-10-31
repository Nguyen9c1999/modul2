import {Cadres} from "./cadres";
import {Staff} from "./staff";
import {Engineer} from "./engeneers";
import {Worker} from "./worker";

export  class Manager {
    listCadres: Cadres[]=[]


    add(cadres: Cadres) {
        this.listCadres.push(cadres)
    }

    display() {
        for (let value of this.listCadres) {
            console.log(value)
        }
    }
    find(name:string){
        for (let i=0;i<this.listCadres.length;i++){
            if(name===this.listCadres[i].name){
                console.log(this.listCadres[i])
            }
        }
       
    }
}