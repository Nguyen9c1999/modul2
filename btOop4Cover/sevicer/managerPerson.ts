import {InterfaceManger} from "./interfaceManger";
import {Person} from "../model/person";
import {City} from "../model/city";

export class ManagerPerson implements InterfaceManger<Person>{
  listPerson : Person[]=[]
     add(person: Person) {
    this.listPerson.push(person)
    }

    display(city:City) {
    for (let i = 0 ;i<this.listPerson.length;i++){
      if(this.listPerson[i].city==city){
        console.log( `${i+1}. name-${this.listPerson[i].name} id-${this.listPerson[i].id} age-${this.listPerson[i].age} `)
      }
    }
  }

    inFor() {
    }

}