export class Book {
    id : string
    name : string

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
    getName():string{
        return this.name
    }
    setName(name):void{
        this.name=name
    }
    getID():string{
        return this.id
    }
}