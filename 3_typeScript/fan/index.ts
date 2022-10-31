class Fan {
    SLOW = 1 ;
    MEDIUM = 2 ;
    FAST = 3 ;
    private _speed :number= this.SLOW
    private _on : boolean= false
    private _radius :number = 5
    private _color :string = "blue"

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get on(): boolean {
        return this._on;
    }

    set on(value: boolean) {
        this._on = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
    toString(){
       if(this.on==true){
        console.log(    this.speed)
           console.log(this.color)
           console.log(this.radius)
           console.log("fan is on")
       }else {
           console.log(this.color)
           console.log(this.radius)
           console.log("fan is off")
       }
    }
}
let fan1 = new Fan()
console.log(fan1.toString())
