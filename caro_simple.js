let b = document.getElementById('caro_game');

let board = [];
let data = "";

for (let i = 0; i < 5; i++) {
    board [i] = [0, 0, 0, 0, 0];
}
for (let i = 0; i < 5; i++) {
    data += "</br>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
b.innerHTML = data;

function changeValue() {
    let indexX = prompt('Nhập X:');
    let indexY = prompt('Nhập Y:');
    let data = "";
    board[indexX][indexY] = 'x'
    for (let i = 0; i < 5; i++) {
        data += "</br>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML += "<hr/>" + data;
}