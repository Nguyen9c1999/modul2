import {Cadres} from "./cadres";
import {Gender} from "./cadres";
export class Staff extends Cadres{
    work:string

    constructor(name: string, age: number, gender: Gender, address: string, work: string) {
        super(name, age, gender, address);
        this.work = work;
    }
}