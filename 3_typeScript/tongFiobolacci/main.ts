function fibo(n:number) {
    if (n<=1){
        return 1
    }else {
        return fibo(n-1)+fibo(n-2)
    }
}
console.log(fibo(2))