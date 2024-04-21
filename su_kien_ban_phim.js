function moveUp() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 10 + "px";
}
function moveDown () {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 10 + "px";
}
function moveLeft () {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 10 + "px";
}
function moveRight () {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 10 + "px";
}
function select (evt) {
    switch (evt.keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
}
function doReady() {
    window.addEventListener('keydown', select);
    /*dòng lệnh thêm một sự kiện lắng nghe vào cửa sổ Window từ người dùng khi nhấn nút, hàm select sẽ được gọi */
}