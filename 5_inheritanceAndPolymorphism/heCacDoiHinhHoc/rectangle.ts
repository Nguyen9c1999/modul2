import {Shape} from "./shape";

export class Rectangle extends Shape{
    protected _width :number
    private _length :number

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this._width = width;
        this._length = length;
    }




    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
    getArea():number{
        return this._width*this._length
    }
    getPerimeter():number{
        return 2*(this._width+this._length)
    }
    toString(): string {
       return ` A Rectangle with width=${this._width} and length=${this._length}, which is a subclass of ${super.toString()}`
    }
}