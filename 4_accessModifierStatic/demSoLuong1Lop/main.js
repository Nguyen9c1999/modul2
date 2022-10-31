var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
var app1 = new Application('nguyen');
console.log(Application.count);
var app2 = new Application('Hai');
console.log(Application.count);
var app3 = new Application('Bong');
console.log(Application.count);
