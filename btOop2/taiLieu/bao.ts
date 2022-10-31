import {TaiLieu} from "./taiLieu";

export class Bao extends TaiLieu{
    ngayPhatHanh:string

    constructor(maTaiLieu: number, tacGia: string, soLuong: number, ngayPhatHanh: string) {
        super(maTaiLieu, tacGia, soLuong);
        this.ngayPhatHanh = ngayPhatHanh;
    }
}