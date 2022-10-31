var arr = [5, 8, 1, 6, 8, 5];
for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = i - 1; i >= 0; j--) {
        var temp = arr[i];
        if (arr[i] < arr[j]) {
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);
