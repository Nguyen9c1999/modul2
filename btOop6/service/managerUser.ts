import {User} from "../model/user";

export class ManagerUser{
    listUser : User []=[]
    add(user:User){
        this.listUser.push(user)
    }
    display(){
        return this.listUser
    }
    lock(id){
      let index = this.findIndex(id)
         this.listUser[index].status=false
    }
    unLock(id){
        let index = this.findIndex(id)
        return this.listUser[index].status=true
    }
    findIndex(id:number):number{
        for (let i = 0; i <this.listUser.length ; i++) {
            if(this.listUser[i].id=id){
                return i
            }

        }
    }

}