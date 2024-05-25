class ManagementPersonnel {
    constructor(array) {
        this.personnels = array;
    }
    show() {
        let table = "<table><tbody>";
        for (let i = 0; i < this.personnels.length; i++) {
            table += "<tr>";
            table += "<td>" + this.personnels[i].id + "</td>";
            table += "<td>" + this.personnels[i].name + "</td>";
            table += "<td>" + this.personnels[i].birthday + "</td>";
            table += "<td>" + this.personnels[i].gender + "</td>";
            table += "<td>" + this.personnels[i].position + "</td>";
            table += "<td><img id='preview' alt='error' width='100px' height='100px' src=''></td>";
            table += "<td><button id='delete'  onclick='deletePersonnel(" + i + ")'>Xóa</button> " +
                "<button id='edit'  onclick='editPersonnel(" + i + ")'>Sửa</button></td>";
            table += "</tr>";
        }
        table += "</tbody></table>";
        document.getElementById('list').innerHTML = table;
    }

    search(id){
        return this.personnels[id];
    }
    addPersonnel(personnel){
        this.personnels.push(personnel);
    }
    delete(id){
        this.personnels.splice(id,1);
    }
    edit( personnel,id, name, birthday, gender, position, imgFile) {
        personnel.edit(id,name,birthday,gender,position,imgFile);

    }
}