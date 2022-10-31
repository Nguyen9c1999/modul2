"use strict";
exports.__esModule = true;
var chicken_1 = require("./chicken");
var Tiger_1 = require("./Tiger");
var animal = [];
animal[0] = new chicken_1.Chicken();
animal[1] = new Tiger_1.Tiger();
animal.forEach(function (item, index) {
    console.log(item.makeSound());
});
