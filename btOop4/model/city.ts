import {Person} from "./person";

export class City{
    id :number
    name : string;
    population: number=0;
    listPerson:Person[]=[]
    gdp : number
    constructor(id:number,name:string,gdp:number) {
        this.id = id
        this.name= name
        this.gdp=gdp
    }
    add(person:Person){
        this.listPerson.push(person)
        this.population++
    }
    displayList(){
        for (let i =0 ;i<this.listPerson.length;i++){
            console.log(`${i+1}. name-${this.listPerson[i].name} id-${this.listPerson[i].id} age-${this.listPerson[i].age} `)

        }
    }
    showId(){
        return this.id
    }
    showPopulation(){
        return this.population
    }

}