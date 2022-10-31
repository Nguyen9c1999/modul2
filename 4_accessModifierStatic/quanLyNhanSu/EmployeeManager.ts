import {Saffe} from "./saffe";

class EmployeeManager{
    static list:Saffe[]=[]
     add(saffe:Saffe){
        EmployeeManager.list.push(saffe)
    }
    xem1Saffe(saffe:Saffe){
        console.log(saffe)

    }
    display(){
        for (let i=0;i<EmployeeManager.list.length;i++){
            console.log(EmployeeManager.list[i])
        }

    }
    find(id:number){
        for (let i=0;i<EmployeeManager.list.length;i++){
            if(EmployeeManager.list[i].id==id){
                return i
            }
        }
    }
    delete(id:number){
        EmployeeManager.list.splice(this.find(id),1)
    }
}
let saffe1 :Saffe = new Saffe('nguyen','11','dv','nv',1)
let saffe2 :Saffe = new Saffe('bong','12','dv','nv',2)
let saffe3 :Saffe = new Saffe('mai','13','dv','nv',3)
let list : EmployeeManager = new EmployeeManager()
list.add(saffe1)
list.add(saffe2)
list.add(saffe3)
list.delete(2)
list.display()