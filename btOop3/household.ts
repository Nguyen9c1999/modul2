import {Person} from "./person";

export class Household{
    adress:string;
    member:number;
    houseHold:Person[]=[];
   constructor(adress,member) {
       this.adress=adress;
       this.member=member;
       this.houseHold=[]
   }
   add(person:Person):void{
       this.houseHold.push(person)
   }
   display(){
       for (let value of this.houseHold) {
           console.log(value)
       }
   }
   findId(id:number):number{
       for (let i = 0 ; i<this.houseHold.length;i++){
           if (this.houseHold[i].id==id){
               return i
           }
       }

   }
   displayFindId(id:number){
       console.log(this.houseHold[this.findId(id )])
   }
   delete(id:number):void{
       this.houseHold.splice(this.findId(id),1)
   }
   fix(id:number,name:string,age:number,job:string):void{
       this.houseHold[this.findId(id)]= new Person(id,name,age,job)
   }
}