"use strict";
exports.__esModule = true;
var saffe_1 = require("./saffe");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.add = function (saffe) {
        EmployeeManager.list.push(saffe);
    };
    EmployeeManager.prototype.xem1Saffe = function (saffe) {
        console.log(saffe);
    };
    EmployeeManager.prototype.display = function () {
        for (var i = 0; i < EmployeeManager.list.length; i++) {
            console.log(EmployeeManager.list[i]);
        }
    };
    EmployeeManager.prototype.find = function (id) {
        for (var i = 0; i < EmployeeManager.list.length; i++) {
            if (EmployeeManager.list[i].id == id) {
                return i;
            }
        }
    };
    EmployeeManager.prototype["delete"] = function (id) {
        EmployeeManager.list.splice(this.find(id), 1);
    };
    EmployeeManager.list = [];
    return EmployeeManager;
}());
var saffe1 = new saffe_1.Saffe('nguyen', '11', 'dv', 'nv', 1);
var saffe2 = new saffe_1.Saffe('bong', '12', 'dv', 'nv', 2);
var saffe3 = new saffe_1.Saffe('mai', '13', 'dv', 'nv', 3);
var list = new EmployeeManager();
list.add(saffe1);
list.add(saffe2);
list.add(saffe3);
list["delete"](2);
list.display();
