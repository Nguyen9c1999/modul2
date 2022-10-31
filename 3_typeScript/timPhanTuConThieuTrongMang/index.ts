let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10]
let i = 0;
let numbers2 : number[]=[]
while (i<=10){
let a :number = numbers.indexOf(i )
    if (a ==-1){
        numbers2.push(i)
    }

    i++
}
console.log(numbers2)