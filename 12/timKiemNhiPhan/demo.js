var arr = [1, 5, 6, 7, 8, 9, 10];
var x = 9;
var left = 0;
var right = arr.length - 1;
var index = -1;
do {
    var mid = Math.floor((left + right) / 2);
    if (arr[mid] == x) {
        index = mid;
        break;
    }
    else if (arr[mid] < x) {
        left = mid + 1;
    }
    else if (arr[mid] > x) {
        right = mid - 1;
    }
} while (left <= right);
console.log(index);
