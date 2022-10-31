import {Chicken} from "./chicken";
import {Tiger} from "./Tiger";
let animal=[]
 animal[0]= new Chicken()
animal[1]= new Tiger()
animal.forEach((item,index)=>{
    console.log(item.makeSound())
})
