"use strict";
exports.__esModule = true;
var Square_1 = require("./Square");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var shape = [];
shape[1] = new Square_1.Square('HV', 50);
shape[2] = new Circle_1.Circle('hinhTron', 50);
shape[3] = new Rectangle_1.Rectangle(20, 30, 'HCN');
for (var i = 0; i < shape.length; i++) {
    console.log(shape[i].calculateArea());
    shape[i].resize(Math.floor(Math.random() * 100));
    console.log(shape[i].calculateArea());
}
