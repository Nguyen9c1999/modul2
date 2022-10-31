import {maxHeaderSize} from "http";

let arr = [5,4,1,2,7,3]
let max = arr[0]
let max2
for (let i = 0; i <arr.length ; i++) {
    if(max<arr[i]){
        max2 = max
        max = arr[i]
    }
}
console.log(max)
console.log(max2)