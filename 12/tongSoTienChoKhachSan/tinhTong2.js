var arr = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
var tong = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (i == 0) {
            if (arr[i][j] != 0) {
                tong += arr[i][j];
            }
        }
        else if (arr[i][j] != 0 && arr[i - 1][j] != 0) {
            tong += arr[i][j];
        }
    }
}
console.log(tong);
