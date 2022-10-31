var numbers = [0, 2, 3, 5, 7, 8, 9, 10];
var i = 0;
var numbers2 = [];
while (i <= 10) {
    var a = numbers.indexOf(i);
    if (a == -1) {
        numbers2.push(i);
    }
    i++;
}
console.log(numbers2);
