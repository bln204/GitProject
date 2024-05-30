
let soTK = new SoTietKiem ('1', 'Lâu dài', 'Bùi Lê Nam', '1234567890', '07/09/2020', '50000000')

let arrSTK = [soTK];


function show(arrSTK) {
    let table = "<table><tbody>";
    for (let i = 0; i < arrSTK.length; i++) {
        table += "<tr>";
        table += "<td>" + arrSTK[i].maSo + "</td>";
        table += "<td>" + arrSTK[i].loaiTietKiem + "</td>";
        table += "<td>" + arrSTK[i].hoTenKhachHang + "</td>";
        table += "<td>" + arrSTK[i].chungMinhNhanDan + "</td>";
        table += "<td>" + arrSTK[i].ngayMoSo + "</td>";
        table += "<td>" + arrSTK[i].soTienGui + "</td>"
        table += "<td><button id='delete'  onclick='deleteSTK(" + i + ")'>Xóa<i class=\"fa-solid fa-trash\"></i></button>";
        table += "</tr>";
    }
    table += "</tbody></table>";
    document.getElementById('list_STK').innerHTML = table;
}

function validateSoTietKiem(maSo, loaiTietKiem, hoTen, chungMinhNhanDan, ngayMoSo, soTienGui) {
    // Validate mã sổ: chuỗi tối đa 5 ký tự
    if (maSo.length > 5) {
        alert("Mã sổ không được vượt quá 5 ký tự!");
        return false;
    }

    // Validate loại tiết kiệm: chuỗi tối đa 10 ký tự
    if (loaiTietKiem.length > 10) {
        alert("Loại tiết kiệm không được vượt quá 10 ký tự!");
        return false;
    }

    // Validate họ tên khách hàng: chuỗi tối đa 30 ký tự
    if (hoTen.length > 30) {
        alert("Họ tên khách hàng không được vượt quá 30 ký tự!");
        return false;
    }

    // Validate chứng minh nhân dân: Kiểu số
    if (isNaN(chungMinhNhanDan)) {
        alert("Chứng minh nhân dân phải là một số!");
        return false;
    }


    // Validate số tiền gửi: kiểu số
    if (isNaN(soTienGui)) {
        alert("Số tiền gửi phải là một số!");
        return false;
    }

    return true; 
}

function checkSTKIsEmpty() {
    let maSo = document.getElementById('id').value;
    let loaiTietKiem = document.getElementById('loai').value;
    let hoTen = document.getElementById('fullname').value;
    let cMND = document.getElementById('cmnd').value;
    let day = document.getElementById('dayopen').value;
    let money = document.getElementById('money').value;


    let fields = [
        {field: maSo, name: 'Mã Sổ'},
        {field: loaiTietKiem, name: 'Loại tiết kiệm'},
        {field: hoTen, name: 'Họ tên khách hàng'},
        {field: cMND, name: 'Chứng minh nhân dân'},
        {field: day, name: 'Ngày mở sổ'},
        {field: money, name: 'Số tiền gửi'}
    ];

    for (let i = 0; i < fields.length; i++) {
        switch (true) {
            case !fields[i].field:
                alert(`Vui lòng nhập đầy đủ thông tin: ${fields[i].name}!`);
                return false;
        }
    }
    validateSoTietKiem(maSo,loaiTietKiem,hoTen,cMND,day,money);
    return true;

}


function addSoTietKiem() {

    if(!checkSTKIsEmpty()){
        return false;
    }

    let maSo = document.getElementById('id').value;
    let loaiTietKiem = document.getElementById('loai').value;
    let hoTen = document.getElementById('fullname').value;
    let cMND = document.getElementById('cmnd').value;
    let day = document.getElementById('dayopen').value;
    let money = document.getElementById('money').value;

    let soTK = new SoTietKiem(maSo, loaiTietKiem, hoTen, cMND, day, money);
    arrSTK.push(soTK);

    clearAll();
    alert('Đã thêm thành công!');
    show(arrSTK);
}

function clearAll() {
    document.getElementById('id').value = "";
    document.getElementById('loai').value = "";
    document.getElementById('fullname').value = "";
    document.getElementById('cmnd').value = "";
    document.getElementById('dayopen').value = "";
    document.getElementById('money').value = "";
}

function deleteSTK(index) {
    let check = confirm("Bạn có chắc chắn muốn xóa không?");
    if (check) {
        arrSTK.splice(index, 1);
        show(arrSTK);
    }
}
show(arrSTK);