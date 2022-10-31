"use strict";
exports.__esModule = true;
var arr = [5, 4, 1, 2, 7, 3];
var max = arr[0];
var max2;
for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max2 = max;
        max = arr[i];
    }
}
console.log(max);
console.log(max2);
