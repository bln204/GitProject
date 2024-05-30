class SoTietKiem {
    constructor(maSo, loaiTietKiem, hoTenKhachHang, chungMinhNhanDan, ngayMoSo, soTienGui) {
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.hoTenKhachHang = hoTenKhachHang;
        this.chungMinhNhanDan = chungMinhNhanDan;
        this.ngayMoSo = ngayMoSo;
        this.soTienGui = soTienGui;
    }
    getMaSo () {
        return this.maSo;
    }
    getLoaiTietKiem (){
        return this.loaiTietKiem;
    }
    getHoTenKH () {
        return this.hoTenKhachHang;
    }
    getCMND () {
        return this.chungMinhNhanDan;
    }
    getNgayMoSo () {
        return this.ngayMoSo;
    }
    getSoTienGui (){
        return this.soTienGui;
    }
}