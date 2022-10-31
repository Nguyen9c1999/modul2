class Circle{
    color : string
    radius : number
    constructor(c,r) {
        this.color = c
        this.radius=r
    }
}
let arr : Circle[] = []
arr.push(new Circle('red',5))
arr.push(new Circle('black',10))
arr.push(new Circle('white',15))
let display = (circle:Circle)=>{
    console.log(`mau la ${circle.color} ban kinh là ${circle.radius}`)
}
arr.forEach(display)
