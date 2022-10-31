import {Circle} from "./circle";
function distance(circleOne: Circle, circleTwo:Circle,d:number){
    let distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
let circleOne = new Circle(9)
let circleTwo = new Circle(5)
console.log(distance(circleOne,circleTwo,24))