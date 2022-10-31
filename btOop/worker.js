"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Worker = void 0;
var cadres_1 = require("./cadres");
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(name, age, gender, address, lever) {
        var _this = _super.call(this, name, age, gender, address) || this;
        _this.lever = lever;
        return _this;
    }
    return Worker;
}(cadres_1.Cadres));
exports.Worker = Worker;
