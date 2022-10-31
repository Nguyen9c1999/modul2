export class Circle{
    radius:number

    constructor(radius: number) {
        this.radius = radius;
    }
    toString(): string {
        return "A Circle with radius="
            + this.radius;
    }
}