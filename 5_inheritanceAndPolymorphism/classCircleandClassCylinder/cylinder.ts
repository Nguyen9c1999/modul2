import {Circle} from "./circle";

class Cylinder extends Circle{
    height:number

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this.height = height;
    }
    getVolumetric():number{
        return this.height * super.getArea()
    }
}
let cylinder : Cylinder =  new Cylinder(10,'red',50)
console.log(cylinder.getVolumetric())