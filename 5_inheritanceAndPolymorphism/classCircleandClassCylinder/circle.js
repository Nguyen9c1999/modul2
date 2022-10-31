"use strict";
exports.__esModule = true;
exports.Circle = void 0;
// Lớp Circle có những thuộc tính mô tả bán kính, màu sắc, các getter/setter cho các thuộc tính đó
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this._radius = radius;
        this._color = color;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.getArea = function () {
        return 3.14 * this._radius * this._radius;
    };
    return Circle;
}());
exports.Circle = Circle;
var circle = new Circle(10.5, 'red');
console.log(circle);
console.log(circle.getArea());
