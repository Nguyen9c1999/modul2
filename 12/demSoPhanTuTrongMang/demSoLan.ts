let arr :number[]=[1,2,4,3,4,5,4]
function findCount(arr:number[],value:number){
    let count : number =0
    for (let i = 0; i <arr.length ; i++) {

        if(arr[i]==value){
            count ++

        }
    }
    return count

}

console.log(findCount(arr,4))
