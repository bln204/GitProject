/*Bài 1: Nhập điểm VL, HH, SH và hiển thị tổng điểm và điểm trung bình*/
/*
function getPoint() {
let point_physics = parseFloat(document.getElementById ("physics" ).value);
let point_chemistry = parseFloat(document.getElementById( "chemistry" ).value);
let point_biology = parseFloat(document.getElementById( "biology").value);
let sum_point = point_biology + point_chemistry + point_physics;
let average_point = (point_physics + point_biology + point_chemistry) /3;
document.getElementById("result").innerHTML = 'Tổng điểm của học sinh: ' + sum_point +
    '<br>' + 'Điểm trung bình của học sinh là: ' + average_point;
}
*/

/*Bài 2: Nhập độ C và chuyển sang độ F*/
/*function getCelsius() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let fahrenheit = 9/5*celsius+32;
    document.getElementById("result").innerHTML = 'Từ ' + celsius + ' độ C sang độ F là:' + fahrenheit;
}*/


/*Bài 3: Tính diện tích hình tròn*/
/*
function getRadius() {
    const pi = 3.14;
    let radius = parseFloat(document.getElementById("radius").value);
    let area = pi * radius * radius;
    document.getElementById('result').innerHTML = 'Diện tích hình tròn là: ' + area;
}*/


/*Bài 4: Tính chu vi hình tròn*/
function getRadius() {
    const pi = 3.14;
    let radius = parseFloat(document.getElementById("radius").value);
    let chu_vi = pi * radius * 2;
    document.getElementById('result').innerHTML = 'Chu vi hình tròn là: ' + chu_vi;
}