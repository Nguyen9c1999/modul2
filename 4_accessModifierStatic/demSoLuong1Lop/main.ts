class Application{
    public name : string
    public static count :number = 0 ;
    constructor(name) {
        this.name=name
        Application.count++
    }
}
let app1 = new Application('nguyen')
console.log(Application.count)
let app2 = new Application('Hai')
console.log(Application.count)
let app3 = new Application('Bong')
console.log(Application.count)
