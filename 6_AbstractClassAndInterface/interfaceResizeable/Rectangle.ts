import {Shape} from "./Shape";
import {Resizeable} from "./Resizeable";

export class Rectangle extends Shape implements Resizeable{
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.width;
    }

    calculatePerimeter(): number {
        return (this.width + this.width) * 2;
    }

    resize(percent: number) {
        this.width = (this.width*percent/100)+ this.width

    }
}