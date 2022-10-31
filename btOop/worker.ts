import {Cadres} from "./cadres";
import {Gender} from "./cadres";

export class Worker extends Cadres{
    lever:number;

    constructor(name: string, age: number, gender: Gender, address: string, lever: number) {
        super(name, age, gender, address);
        this.lever = lever;
    }
}