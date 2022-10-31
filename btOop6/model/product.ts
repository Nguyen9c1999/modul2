export class Product{
    id:number
    name:string
    quantity:number
    cost : number

    constructor(id: number, name: string, quantity: number, cost: number) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.cost = cost;
    }
}