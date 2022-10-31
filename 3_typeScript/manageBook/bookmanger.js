"use strict";
exports.__esModule = true;
exports.Books = void 0;
var Books = /** @class */ (function () {
    function Books() {
        this.books = [];
    }
    Books.prototype.add = function (book) {
        this.books.push(book);
    };
    Books.prototype.getList = function () {
        return this.books;
    };
    Books.prototype.findBook = function (ID) {
        var i = -1;
        this.books.forEach(function (book, index) {
            if (book.id === ID) {
                i = index;
            }
        });
        return i;
    };
    Books.prototype["delete"] = function (ID) {
        var indexBookDelete = this.findBook(ID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    Books.prototype.update = function (ID, name) {
        var indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        }
        else {
            throw new Error('update error');
        }
    };
    return Books;
}());
exports.Books = Books;
