import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Resizeable";

export class Square extends Rectangle  {
    calculateArea(): number {
        return super.calculateArea();
    }

    calculatePerimeter(): number {
        return super.calculatePerimeter();
    }
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

    resize(percent: number) {
        this.width = (this.width*percent/100)+ this.width
    }
}