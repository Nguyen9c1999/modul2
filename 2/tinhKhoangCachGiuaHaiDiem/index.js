class Point{
    constructor(x,y) {
        this.x = x ;
        this.y=y;
    }
    display = "Point";
    distane(b){
        const dx = this.x - b.x;
        const dy = this.y - b.y;
        return Math.hypot(dx, dy);
    }
}
let p1 = new Point(5,6)
let p2 = new Point(8,9)
console.log(p1.distane(p2))

