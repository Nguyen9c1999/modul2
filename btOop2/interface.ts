export interface QuanLy<T>{
    listQuanLy: T[]
    add(taiLieu:T)
    delete(maTaiLieu:number)
    find(maTaiLieu:number)
    display(maTaiLieu:number)
    out()
}