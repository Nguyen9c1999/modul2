var Fan = /** @class */ (function () {
    function Fan() {
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.FAST = 3;
        this._speed = this.SLOW;
        this._on = false;
        this._radius = 5;
        this._color = "blue";
    }
    Object.defineProperty(Fan.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "on", {
        get: function () {
            return this._on;
        },
        set: function (value) {
            this._on = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Fan.prototype.toString = function () {
        if (this.on == true) {
            console.log(this.speed);
            console.log(this.color);
            console.log(this.radius);
            console.log("fan is on");
        }
        else {
            console.log(this.color);
            console.log(this.radius);
            console.log("fan is off");
        }
    };
    return Fan;
}());
var fan1 = new Fan();
console.log(fan1.toString());
