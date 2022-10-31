import {Cadres} from "./cadres";
import {Gender} from "./cadres";

export class Engineer extends Cadres{
    trainingIndustry:string;


    constructor(name: string, age: number, gender: Gender, address: string, trainingIndustry: string) {
        super(name, age, gender, address);
        this.trainingIndustry = trainingIndustry;
    }
}