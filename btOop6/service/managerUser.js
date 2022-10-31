"use strict";
exports.__esModule = true;
exports.ManagerUser = void 0;
var ManagerUser = /** @class */ (function () {
    function ManagerUser() {
        this.listUser = [];
    }
    ManagerUser.prototype.add = function (user) {
        this.listUser.push(user);
    };
    ManagerUser.prototype.display = function () {
        return this.listUser;
    };
    ManagerUser.prototype.lock = function (id) {
        var index = this.findIndex(id);
        this.listUser[index].status = false;
    };
    ManagerUser.prototype.unLock = function (id) {
        var index = this.findIndex(id);
        return this.listUser[index].status = true;
    };
    ManagerUser.prototype.findIndex = function (id) {
        for (var i = 0; i < this.listUser.length; i++) {
            if (this.listUser[i].id = id) {
                return i;
            }
        }
    };
    return ManagerUser;
}());
exports.ManagerUser = ManagerUser;
