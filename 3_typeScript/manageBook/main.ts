import {Book} from "./book";
import {Books} from "./bookmanger";
let book1 = new Book('1','java')
let book2 = new Book('2','js')
let book3 = new Book('3','ts')
let manager = new Books()
manager.add(book1)
manager.add(book2)
manager.add(book3)
console.log(manager.getList())
manager.delete('1')
console.log(manager.getList())

