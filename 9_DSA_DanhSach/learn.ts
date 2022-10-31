class node<T> {
    _data: T;
    _next: node<T> | null;

    constructor(data: T) {
        this._data = data;
        this._next = null;
    }
}

class LinkedList<T> {
    head: node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    printList(): void {
        let current: node<T> | null = this.head;
        while (current != null) {
            console.log(current._data);
            current = current._next;
        }
    }

    addTail(x: T): node<T> {
        if (this.head == null) {
            this.head = new node<T>(x);
        } else {
            // xac dinh vi tri ma dang xet
            let current: node<T> = this.head;
            // Tim thang cuoi cung
            while (current._next != null) {
                current = current._next;
            }
            current._next = new node<T>(x);
        }
        this.size++;
        return this.head;
    }
}

let linh: LinkedList<number> = new LinkedList<number>();
linh.addTail(10);
linh.addTail(200);
linh.addTail(100);

linh.printList();