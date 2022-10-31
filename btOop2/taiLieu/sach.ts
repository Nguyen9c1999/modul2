import {TaiLieu} from "./taiLieu";

export class Sach extends TaiLieu{
    tacGia:string;
    soTrang:number;

    constructor(maTaiLieu: number, tacGia: string, soLuong: number, soTrang: number) {
        super(maTaiLieu, tacGia, soLuong);
        this.tacGia = tacGia;
        this.soTrang = soTrang;
    }
}