"use strict";
exports.__esModule = true;
exports.City = void 0;
var City = /** @class */ (function () {
    function City(id, name, gdp) {
        this.population = 0;
        this.listPerson = [];
        this.id = id;
        this.name = name;
        this.gdp = gdp;
    }
    City.prototype.add = function (person) {
        this.listPerson.push(person);
        this.population++;
    };
    City.prototype.displayList = function () {
        for (var i = 0; i < this.listPerson.length; i++) {
            console.log("".concat(i + 1, ". name-").concat(this.listPerson[i].name, " id-").concat(this.listPerson[i].id, " age-").concat(this.listPerson[i].age, " "));
        }
    };
    City.prototype.showId = function () {
        return this.id;
    };
    City.prototype.showPopulation = function () {
        return this.population;
    };
    return City;
}());
exports.City = City;
