let arr = [1,5,6,7,8,9,10]
let x = 9
let left = 0
let right = arr.length-1
let index = -1
do{
    let mid =  Math.floor((left + right ) /2)
    if (arr[mid] == x){
        index = mid
        break;
    }else if(arr[mid]<x){
        left = mid +1
    }else if (arr[mid]>x){
        right = mid -1
    }
}while (left<=right)
console.log(index)
