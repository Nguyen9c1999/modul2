// Lớp Circle có những thuộc tính mô tả bán kính, màu sắc, các getter/setter cho các thuộc tính đó
export class Circle {
    private _radius : number
    private _color : string

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
    getArea():number{
        return 3.14*this._radius*this._radius
    }
}
let circle :Circle =  new Circle(10.5,'red')
console.log(circle)
console.log(circle.getArea())