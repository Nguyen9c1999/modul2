var PT = /** @class */ (function () {
    function PT(a, b) {
        this.a = a;
        this.b = b;
    }
    PT.prototype.coNghiem = function () {
        var x = -this.b / this.a;
        return x;
    };
    PT.prototype.ketQua = function () {
        if (this.a != 0) {
            console.log(this.coNghiem());
        }
        else if (this.a == 0 && this.b == 0) {
            console.log("vo so nghiem");
        }
        else {
            console.log("vo nghiem");
        }
    };
    return PT;
}());
var pt1 = new PT(5);
pt1.ketQua();
