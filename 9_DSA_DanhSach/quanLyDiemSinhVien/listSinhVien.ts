import {NodeSinhVien} from "./nodeSinhVien";

class ListSinhVien{
   head : NodeSinhVien|null
    size:number;
   constructor() {
       this.head= null;
       this.size=0
   }
    insertFirst(name:string,score:number):NodeSinhVien{
       if (this.head==null){
           this.head= new NodeSinhVien(name,score)
           this.size++
       }else {
           let tempt = this.head
           this.head=new  NodeSinhVien(name,score)
           this.head.next=tempt
           this.size++
       }
       return this.head

    }
    showList(){
       if(this.head==null){
           console.log('chưa có dữ liệu ')
       }else {
           let current = this.head
           while (current!=null){
               console.log(current.name)
               console.log(current.score)
               current=current.next

           }
       }
    }
    insertLast(name:string,score:number) {
        if (this.head == null) {
            this.head = new NodeSinhVien(name, score)
            this.size++
            }else {
            let current = this.head;
            while (current.next!=null){
                current = current.next

            }
            current.next = new NodeSinhVien(name,score)
            this.size++
        }
        return this.head
    }
    listStudentMaxScore(){
        if(this.head==null){
            console.log('chưa có dữ liệu ')
        }else {
            let current = this.head
            let max = current.score
            let nameMax = current.name
            while (current!=null){
                if(current.score>max){
                    max = current.score
                    nameMax=current.name
                }
                current=current.next

            }
            console.log(`${nameMax} người có điểm cao nhất, ${max} điểm `)
        }

    }
    totalStudentsFail(){
        if(this.head==null){
            console.log('chưa có dữ liệu ')
        }else {
            let current = this.head
             let count = 0
            while (current!=null){
                if(current.score<=5){
                    count ++
                }
                current=current.next

            }
            console.log(`co ${count} sinh viên thi lại `)
        }

    }
}
let listSV1 : ListSinhVien = new ListSinhVien()
listSV1.insertFirst('nguyen',10)
listSV1.insertFirst('bong',9)
listSV1.insertFirst('mai',8)
listSV1.insertLast('lon',7)
listSV1.insertLast('tin',5)
listSV1.showList()
listSV1.listStudentMaxScore()
listSV1.totalStudentsFail()

