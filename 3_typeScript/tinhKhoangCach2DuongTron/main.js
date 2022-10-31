"use strict";
exports.__esModule = true;
var circle_1 = require("./circle");
function distance(circleOne, circleTwo, d) {
    var distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
var circleOne = new circle_1.Circle(9);
var circleTwo = new circle_1.Circle(5);
console.log(distance(circleOne, circleTwo, 24));
