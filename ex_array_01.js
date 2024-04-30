/*Bài 1:  Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử.
Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.*/
let array = [];
let i = 0;
let count = 0;

function add_to_array() {
    /*array[i] = document.getElementById('array').value;*/
    array.push(document.getElementById('array').value);
    console.log(array[i]);
    i++;
    document.getElementById('array').value = "";
}

function count_array() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10) {
            count++;
        }
    }
    document.getElementById('result').innerHTML = count;

}
/*Bài 2: Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau.
Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.*/
/*let array = [];
let i = 0;
let index = 0;
function add_to_array() {
    array[i] = parseInt(document.getElementById('array').value);
    array.push(document.getElementById('array').value);
    console.log(array[i]);
    i++;
    document.getElementById('array').value = "";
}
function maxInArray (){
    let max = parseInt(array[0]);
    for ( let i = 0; i < array.length; i++){
        if ( parseInt(array[i] )> max){
            max = parseInt(array[i]);
            /!*index = i;*!/
            index = array.indexOf(max);
        }
    }
    document.getElementById('result').innerHTML = 'Số lớn nhất là ' + max + ' tại vị trí ' + index;
}*/

/*Bài 3:  Viết chương trình khởi tạo mảng số nguyên. Hiển hiện giá trị lớn
nhất trong mảng đó. In ra giá trị trung bình của các phần tử trong mảng.*/
/*
let array = [];
let i = 0;
let index = 0;
function add_to_array() {
    array[i] = parseInt(document.getElementById('array').value);
    array.push(document.getElementById('array').value);
    console.log(array[i]);
    i++;
    document.getElementById('array').value = "";
}
function maxInArray (){
    let max = parseInt(array[0]);
    for ( let i = 0; i < array.length; i++){
        if ( parseInt(array[i] )> max){
            max = parseInt(array[i]);
            index = i;
        }
    }
    document.getElementById('result').innerHTML = 'Số lớn nhất là ' + max + ' tại vị trí ' + index;
}
function averageOfArray (){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += parseInt(array[i]);
    }
    let average = sum / array.length;
    document.getElementById('result').innerHTML = 'Giá trị trung bình là '+ average;
}*/

/*Bài 4- Viết chương trình nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.*/
/*let array = [];
let i = 0;
let first = 0;
let last = array.length - 1;

function add_to_array() {
    array[i] = parseInt(document.getElementById('array').value);
    array.push(document.getElementById('array').value);
    console.log(array[i]);
    i++;
    document.getElementById('array').value = "";
}

function reverse_array() {
    last = array.length - 1;
    while (first < last) {
        let temp = array[first];
        array[first] = array[last];
        array[last] = temp;
        first++;
        last--;
    }
    document.getElementById('result').innerHTML = 'Mảng sau khi đảo ngược là: ' + array
}*/

/*Bài 5- Viết chương trình đếm số nguyên âm trong một chuỗi*/
/*
let array = [];
let i = 0;
let count = 0;
function add_to_array() {
    array[i] = parseInt(document.getElementById('array').value);
    array.push(document.getElementById('array').value);
    console.log(array[i]);
    i++;
    document.getElementById('array').value = "";
}
function count_in_array () {
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0){
            count++;
        }
    }
    document.getElementById('result').innerHTML = 'Có '+ count +' số nguyên âm trong mảng';
}*/

/*Bài 6- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V.
Chương trình tìm xem V có nằm trong mảng số nguyên không?
Nếu V thuộc mảng số nguyên thì in ra "V is in the array" còn lại in ra "V is not in the array".*/
/*
let array = [];
let i = 0;
let checkArray = 0;

function add_to_array() {
    array[i] = parseInt(document.getElementById('array').value);
    array.push(document.getElementById('array').value);
    console.log(array[i]);
    i++;
    document.getElementById('array').value = "";
}
function checkInArray () {
    let check = parseInt(document.getElementById('check').value);
    for (let i = 0; i < array.length; i++){
        if (array[i] === check){
            checkArray = 1;
        }
    }
    if (checkArray === 1){
        document.getElementById('result').innerHTML = 'V có nằm trong mảng';
    } else {
        document.getElementById('result').innerHTML = 'V không nằm trong mảng';
    }
}*/

/*Bài 7- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V.
 Chương trình kiểm tra xem V có thuộc mảng đã cho không, nếu V thuộc mảng đã cho xoá V khỏi mảng
(Bản chất việc xoá ở đây tức là dịch phần tử ở bên phải V sang vị trí của V, và gán 0 cho phần tử cuối cùng của mảng)*/
/*
let array = [];
let i = 0;
count = 0;
function add_to_array() {
    array[i] = parseInt(document.getElementById('array').value);
    array.push(document.getElementById('array').value);
    console.log(array[i]);
    i++;
    document.getElementById('array').value = "";
}

function remove_array (){
    let check = parseInt(document.getElementById('check').value);
    for (let i = 0; i < array.length; i++){
        if (array[i] === check){
            /!*for (let j = i; j < array.length; j++){
                array[j] = array[j+1];
            }*!/
            array.splice(i, 1);
            count = 1;
        }
    }
    if (count === 1){
        document.getElementById('result').innerHTML = 'V đã xoá khỏi mảng';
        document.getElementById('result').innerHTML = 'Mảng sau khi xóa ' + array;
    } else {
        document.getElementById('result').innerHTML = 'V không nằm trong mảng';
    }
}
*/


/*Bài 8- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử.
Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp*/
/*
let array = [];
let i = 0;

function add_to_array() {
    array[i] = parseInt(document.getElementById('array').value);
    array.push(document.getElementById('array').value);
    console.log(array[i]);
    i++;
    document.getElementById('array').value = "";
}
function sort_array() {
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] < array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    document.getElementById('result').innerHTML = 'Mảng sau khi sắp xếp là: '+ array;
}*/
/*Bài 9- Viết chương trình khởi tạo/nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c.*/
/*
let arrayA = [];
let arrayB = [];
let i = 0;
let indexC = 0;

function add_to_array_a() {
    arrayA[i] = parseInt(document.getElementById('array').value);
    array.push(document.getElementById('array').value);
    console.log('Mảng A ' + arrayA[i]);
    i++;
    document.getElementById('array').value = "";
}
function add_to_array_b() {
    arrayB[i] = parseInt(document.getElementById('array').value);
    console.log('Mảng B ' + arrayB[i]);
    i++;
    document.getElementById('array').value = "";
}


function connect_array () {
    let arrayC = [];
    arrayC = arrayA.concat(arrayB);
   /!* for (let i = 0; i < arrayA.length; i++){
        arrayC[indexC] = arrayA[i];
        indexC ++;
    }
    for (let i = 0; i < arrayB.length; i++){
        arrayC[indexC] = arrayB[i];
        indexC ++;
    }*!/

    document.getElementById('result').innerHTML = 'Mảng sau khi kết nối là: '+ arrayC;
}
*/
