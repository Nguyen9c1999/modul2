import {Person} from "./person";

export class City{
    id :number
    name : string;
    population: number=0;
    gdp : number
    constructor(id:number,name:string,gdp:number) {
        this.id = id
        this.name= name
        this.gdp=gdp
    }


}