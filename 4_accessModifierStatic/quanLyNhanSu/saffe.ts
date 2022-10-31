export class Saffe{
    name:string;
    date:string;
    address:string;

    jobPosition:string;
    id:number

    constructor(name: string, date: string, address: string, jobPosition: string,id:number) {
        this.name = name;
        this.date = date;
        this.address = address;
        this.jobPosition = jobPosition;
        this.id=id
    }

}