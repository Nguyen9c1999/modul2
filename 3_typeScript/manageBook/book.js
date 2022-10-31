"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, name) {
        this.id = id;
        this.name = name;
    }
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    Book.prototype.getID = function () {
        return this.id;
    };
    return Book;
}());
exports.Book = Book;
