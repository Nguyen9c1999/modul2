function doSomethingGreat(obj, arr) {
    obj.value = 3500;
    arr.push(obj.value);
}
const a = { value: 1500 };
const b = [1000];
b.push(a.value);
doSomethingGreat(a, b);
console.log(b); // in ra cái gì?
//1000/1500/3500