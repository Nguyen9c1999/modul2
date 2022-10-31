export class User{
    id:number
    name:string
    status : boolean = true

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}