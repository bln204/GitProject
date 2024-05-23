let personnel = new Personnel (1, "Bùi Lê Nam", "03/09/2004", "Nam", "Trưởng phòng", "image/30f140.webp");
let personnel1 = new Personnel (2, "Nguyễn Văn Nhân", "03/09/2000", "Nam", "Phó phòng","image/OIP.jpg");
let array = [personnel, personnel1];
let manage = new ManagementPersonnel (array);


function getImage(){
    let fileInput = document.getElementById('img').files;
        console.log(fileInput);
    let img;
    img.src = fileInput[0].name;

}


function checkPersonnelIsEmpty() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('fullname').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.getElementById('gender').value;
    const position = document.getElementById('position').value;
    const imgFile = document.getElementById('img').files;


    const fields = [
        { field: id, name: 'ID' },
        { field: name, name: 'Full Name' },
        { field: birthday, name: 'Birthday' },
        { field: gender, name: 'Gender' },
        { field: position, name: 'Position' },
        { field: imgFile, name: 'Image File' }
    ];

    for (let i = 0; i < fields.length; i++) {
        switch (true) {
            case !fields[i].field:
                alert(`Vui lòng nhập đầy đủ thông tin: ${fields[i].name}!`);
                return false;
        }
    }
    return true;
}
function addPersonnel(){

    if(!checkPersonnelIsEmpty()){
        return false;
    }

    let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let birthday = document.getElementById('birthday').value;
    let gender = document.getElementById('gender').value;
    let position = document.getElementById('position').value;
    let imgFile = document.getElementById('img').files;



    let personnel = new Personnel(id, name, birthday, gender, position, imgFile);
    manage.addPersonnel(personnel);

    clearAll();
    alert("Đã thêm thành công!");
    manage.show();

}


 let idPer = 0;
function editPersonnel(id){
    let per = manage.search(id);
    document.getElementById('id').value = per.id;
    document.getElementById('fullname').value = per.name;
    document.getElementById('birthday').value = per.birthday;
    document.getElementById('gender').value = per.gender;
    document.getElementById('position').value = per.position;
    document.getElementById('img').files = per.image;


    if(!checkPersonnelIsEmpty()){
        return false;
    }

    idPer = id;
}
function updatePersonnel () {
   let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let birthday = document.getElementById('birthday').value;
    let gender = document.getElementById('gender').value;
    let position = document.getElementById('position').value;
    let imgFile = document.getElementById('img').files;

    let per = manage.search(idPer)
    manage.edit(per, id, name, birthday, gender, position, imgFile);
    manage.show();
    clearAll();

}


function deletePersonnel(){
    let id = document.getElementById('id').value;
    let check = confirm("Bạn muốn xóa nhân sự này?");
    if(check){
        alert("Cảm ơn đã xác nhận!");
        manage.delete(id);
        manage.show();
    } else{
        alert("Cảm ơn đã xác nhận!");
    }

}


function clearAll(){
    document.getElementById('id').value = "";
    document.getElementById('fullname').value = "";
    document.getElementById('birthday').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('position').value = "";
    document.getElementById('img').value = "";
}

manage.show();