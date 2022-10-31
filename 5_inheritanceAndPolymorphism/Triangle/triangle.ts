import {Shape} from "./shape";

class Triangle extends Shape{
    side1 : number
    side2 : number

    side3 : number


    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
}