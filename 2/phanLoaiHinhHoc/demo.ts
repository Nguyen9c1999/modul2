class Shape {
    color: string;
    filled: boolean
    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
    getColor(){
        return this.color
    }
}

let shape = new Shape('red',true)
console.log(shape.getColor())