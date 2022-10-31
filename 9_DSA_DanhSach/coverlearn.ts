class node<T>{
    data:T ;
    next:node<T>|null
    constructor(data:T) {
        this.data=data
        this.next=null
    }
}
class LinkList <T> {
    head: node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0
    }
  addTail(x:T):node<T>{
        if(this.head==null){
            this.head = new node<T>(x)
        }else {
            let current:node<T> = this.head;
            while (current.next!=null){
                current = current.next
            }
            current.next = new node<T>(x)
        }
        this.size++
        return this.head
    }
    printList():void{
        let current = this.head;
        while (current !=null){
            console.log(current.data)
            current=current.next

        }
    }
    addHead(x:T):node<T>{
        let Temp = this.head
        this.head = new node<T>(x)
        this.head.next = Temp
        return this.head
        this.size++
    }
}
let linkList : LinkList<number> = new LinkList()
linkList.addTail(1)
linkList.addTail(2)
linkList.addTail(3)
linkList.addHead(4)
linkList.addHead(5)
linkList.printList()





