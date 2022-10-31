var arr = [1, 2, 4, 3, 4, 5, 4];
function findCount(arr, value) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            count++;
        }
    }
    return count;
}
console.log(findCount(arr, 4));
