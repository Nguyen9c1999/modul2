 export class NodeSinhVien{
    name:string;
    score: number;
    next: NodeSinhVien|null
    constructor(name,score) {
        this.name=name
        this.score=score
        this.next=null

    }


}