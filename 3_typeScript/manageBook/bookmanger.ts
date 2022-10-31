import {Book} from "./book";
export class Books {
    books : Book[]=[];
    add(book:Book):void{
        this.books.push(book)
    }
    getList():Book[]{
     return this.books
    }

    findBook(ID: string) {
        let i = -1;
        this.books.forEach((book,  index) => {
            if (book.id  === ID) {
                i = index;
            }
        })

        return i;
    }
    delete(ID: string): void {
        let indexBookDelete = this.findBook(ID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        } else {
            throw new Error('delete error')
        }
    }
    update(ID: string, name: string) {
        let indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        } else {
            throw new Error('update error')
        }
    }
}