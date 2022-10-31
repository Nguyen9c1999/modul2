var node = /** @class */ (function () {
    function node(data) {
        this.data = data;
        this.next = null;
    }
    return node;
}());
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.head = null;
        this.size = 0;
    }
    LinkList.prototype.addTail = function (x) {
        if (this.head == null) {
            this.head = new node(x);
        }
        else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new node(x);
        }
        this.size++;
        return this.head;
    };
    LinkList.prototype.printList = function () {
        var current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    };
    LinkList.prototype.addHead = function (x) {
        var Temp = this.head;
        this.head = new node(x);
        this.head.next = Temp;
        return this.head;
        this.size++;
    };
    return LinkList;
}());
var linkList = new LinkList();
linkList.addTail(1);
linkList.addTail(2);
linkList.addTail(3);
linkList.addHead(4);
linkList.addHead(5);
linkList.printList();
