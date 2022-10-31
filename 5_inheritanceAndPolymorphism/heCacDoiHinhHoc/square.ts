import {Rectangle} from "./rectangle";
export class Square extends Rectangle {
    side : number


    constructor(color: string, filled: boolean,  side: number) {
        super(color, filled, side, side );
        this.side = side;
        this._width
    }
}