let img = null;
img = document.getElementById('myImage');
function init () {
    img = document.getElementById('myImage');
    img.style.position ='relative';
    img.style.left = '0px';
}
function moveRight() {
    img.style.left = parseInt(img.style.left) + 10 + 'px';
}
function moveLeft() {
    img.style.left = parseInt(img.style.left) - 10 + 'px';
}window.onload = init;