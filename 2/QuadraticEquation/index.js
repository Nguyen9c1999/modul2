class QuadraticEquation{
    constructor(a,b,c) {
        this.a = a;
        this.b=b;
        this.c=c;
    }
    getDiscriminant(){
        let deta = this.b * 2 - 4 *this.a*this.c
        return deta
    }
    getRoot1(){
        let x1 = (-this.b + Math.pow(this.getDiscriminant(), 0.5))/ 2*this.a
        return x1
    }
    getRoot2(){
        let x2 = (-this.b - Math.pow(this.getDiscriminant(), 0.5))/ 2*this.a
        return x2
    }
    getDoubleSolution(){
        let x = (-this.b) / 2*this.a
        return x
    }
    get(){
        // this.getDiscriminant()
        // this.getRoot1()
        // this.getRoot2()
        // this.getDoubleSolution()
        if (this.getDiscriminant()>0){
            console.log(this.getRoot1())
            console.log(this.getRoot2())
        }
        if (this.getDiscriminant()==0){
            console.log(this.getDoubleSolution())
        }
        if (this.getDiscriminant()<0){
            console.log(`The equation has no roots`)
        }

    }
}
let equation1 = new QuadraticEquation(5,6,0)
equation1.get()