import {Household} from "./household";
import {Person} from "./person";

export class Neiberhood{
    name:string;
    neiberhood:Household[];
    constructor(name:string) {
        this.name=name ;
        this.neiberhood=[]

    }
    add(household:Household):void{
        this.neiberhood.push(household)
    }
    display(){
        for (let value of this.neiberhood) {
            console.log(value)
        }
    }
    findId(adress:string):number{
        for (let i = 0 ; i<this.neiberhood.length;i++){
            if (this.neiberhood[i].adress==adress){
                return i
            }
        }

    }
    delete(adress:string):void{
        this.neiberhood.splice(this.findId(adress),1)
    }
    fix(adress:string,newAdress:string,member):void{
        this.neiberhood[this.findId(adress)]= new Household(newAdress,member)

    }
    findMember(member){
        for (let i =0 ;i<this.neiberhood.length;i++){
            if(this.neiberhood[i].member>member){
                console.log(this.neiberhood[i].adress)
            }
        }
    }
    findNameAndNeiberhood(name:string){
        for (let i=0;i<this.neiberhood.length;i++){
            if (this.neiberhood[i].houseHold[i].name==name){
                console.log(this.neiberhood[i].adress)
            }
                }
    }
    displayFindId(adress:string){
        console.log(this.neiberhood[this.findId(adress )])
}
}