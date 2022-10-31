var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    return Shape;
}());
var shape = new Shape('red', true);
console.log(shape.getColor());
