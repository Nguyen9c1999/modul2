"use strict";
exports.__esModule = true;
var nodeSinhVien_1 = require("./nodeSinhVien");
var ListSinhVien = /** @class */ (function () {
    function ListSinhVien() {
        this.head = null;
        this.size = 0;
    }
    ListSinhVien.prototype.insertFirst = function (name, score) {
        if (this.head == null) {
            this.head = new nodeSinhVien_1.NodeSinhVien(name, score);
            this.size++;
        }
        else {
            var tempt = this.head;
            this.head = new nodeSinhVien_1.NodeSinhVien(name, score);
            this.head.next = tempt;
            this.size++;
        }
        return this.head;
    };
    ListSinhVien.prototype.showList = function () {
        if (this.head == null) {
            console.log('chưa có dữ liệu ');
        }
        else {
            var current = this.head;
            while (current != null) {
                console.log(current.name);
                console.log(current.score);
                current = current.next;
            }
        }
    };
    ListSinhVien.prototype.insertLast = function (name, score) {
        if (this.head == null) {
            this.head = new nodeSinhVien_1.NodeSinhVien(name, score);
            this.size++;
        }
        else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new nodeSinhVien_1.NodeSinhVien(name, score);
            this.size++;
        }
        return this.head;
    };
    ListSinhVien.prototype.listStudentMaxScore = function () {
        if (this.head == null) {
            console.log('chưa có dữ liệu ');
        }
        else {
            var current = this.head;
            var max = current.score;
            var nameMax = current.name;
            while (current != null) {
                if (current.score > max) {
                    max = current.score;
                    nameMax = current.name;
                }
                current = current.next;
            }
            console.log("".concat(nameMax, " ng\u01B0\u1EDDi c\u00F3 \u0111i\u1EC3m cao nh\u1EA5t, ").concat(max, " \u0111i\u1EC3m "));
        }
    };
    ListSinhVien.prototype.totalStudentsFail = function () {
        if (this.head == null) {
            console.log('chưa có dữ liệu ');
        }
        else {
            var current = this.head;
            var count = 0;
            while (current != null) {
                if (current.score <= 5) {
                    count++;
                }
                current = current.next;
            }
            console.log("co ".concat(count, " sinh vi\u00EAn thi l\u1EA1i "));
        }
    };
    return ListSinhVien;
}());
var listSV1 = new ListSinhVien();
listSV1.insertFirst('nguyen', 10);
listSV1.insertFirst('bong', 9);
listSV1.insertFirst('mai', 8);
listSV1.insertLast('lon', 7);
listSV1.insertLast('tin', 5);
listSV1.showList();
listSV1.listStudentMaxScore();
listSV1.totalStudentsFail();
