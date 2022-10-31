import {City} from "./city";

export class Person{
    id : number
    name : string
    age :number
    city :City
    constructor(id,name,age,city) {
        this.id=id
        this.name=name
        this.age= age
        this.city = city
    }
}