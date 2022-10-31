var Circle = /** @class */ (function () {
    function Circle(c, r) {
        this.color = c;
        this.radius = r;
    }
    return Circle;
}());
var arr = [];
arr.push(new Circle('red', 5));
arr.push(new Circle('black', 10));
arr.push(new Circle('white', 15));
var display = function (circle) {
    console.log("mau la ".concat(circle.color, " ban kinh l\u00E0 ").concat(circle.radius));
};
arr.forEach(display);
