/*Bài 1: Đếm từ 1 -> 100, nếu số === 99 thì thông báo đã đếm xong*/
/*
let count = 100;
for (let i = 1; i < count; i++) {
    console.log(i);
    if ( i === 99){
        alert('Đã đếm xong');
    }
}*/

/*Bài 2: dùng prompt() để lấy nhiệt độ từ user, nếu lớn hơn 100 thì báo hạ xuống,
 nếu nhỏ hơn 20 thì báo tăng lên*/
/*let temperature = 0;
while (temperature < 100 || temperature > 20) {
    temperature = +prompt('Nhập nhiệt độ hiện tại:');
    if (temperature >= 100) {
        alert('Vui lòng hạ nhiệt độ xuống!');
    } else if (temperature <= 20) {
        alert('Vui lòng tăng nhiệt độ lên!');
    }
}*/

/*Bài 3: Hiển thị 20 số fibonacci đầu tiên*/
/*let fibonacci = 0;
let countfibo = 0;
let fibonacci0 = 0;
let fibonacci1 = 1;
document.write(fibonacci0 + '<br>');
document.write(fibonacci1 + '<br>');
for (let i = 2; i < 1000; i++) {
    fibonacci = fibonacci0 + fibonacci1 ;
    fibonacci0 = fibonacci1;
    fibonacci1 = fibonacci;
    document.write(fibonacci + '<br>');
    countfibo++;
    if (countfibo >= 20) {
        break;
    }
}*/

/*Bài 4: Tìm số đầu tiên chia hết cho 5 đầu tiên trong dãy*/
/*
let fibonacci = 0;
let fibonacci0 = 0;
let fibonacci1 = 1;
for ( let i = 0; i< 100;i++) {
    fibonacci = fibonacci0 + fibonacci1;
    fibonacci0 = fibonacci1;
    fibonacci1 = fibonacci;
    console.log(fibonacci + '<br>');
    if ( fibonacci % 5 === 0){
        document.write(fibonacci);
        break;
    }
}
*/

/*Bài 5:Tính tổng của 20 số đầu tiên trong dãy*/
/*let fibonacci = 0;
let fibonacci0 = 0;
let fibonacci1 = 1;
let checkfibo = 0;
let sum = 0;
for (let i = 0; i < 100;i++){
    fibonacci = fibonacci0 + fibonacci1;
    fibonacci0 = fibonacci1;
    fibonacci1 = fibonacci;
    document.write(fibonacci + "<br>");
    sum += fibonacci;
    checkfibo++;
    if (checkfibo >= 20){
        document.write("Tổng của 20 số Fibonacci đầu tiên: " + sum);
        break;
    }
}*/

/*Bài 6: Tính tổng 30 số chia hết cho 7 đầu tiên trong dãy số tự nhiên*/
/*
let sum = 0;
let check_num = 1;
for (let i = 7; i < 1000;i++){
    if ( i % 7 ===0){
        document.write(i + '<br>');
        sum += i;
        check_num ++;
        if ( check_num > 30) {
            document.write('Tổng của 30 số đầu tiên chia hết cho 7 là: ' + sum);
            break;
        }
    }
}*/

/*Bài 7: In ra các số từ 1 đến 100, nếu số chia hết cho 3 thì in ra Fizz,
nếu chia hết cho 5 thì in ra Buzz, nếu chia hết cho 3 và 5 thì in ra FizzBuzz.*/
/*Điều kiện ràng buộc if (i % 3 === 0) chưa chặt chẽ cần thêm
if (i % 3 === 0 && i % 5 !== 0) thì khi đó ở else if thứ 2 mới hoạt động chính xác. Ở else if đầu tiên cũng vậy!!!
Nếu không có continue; thì vừa in ra số và cả chữ*/
/*for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        document.write('Fizz <br>');
        continue;
    } else if (i % 5 === 0 && i % 5 !== 0) {
        document.write('Buzz <br>');
        continue;
    } else if (i % 3 === 0 && i % 5 === 0) {
        document.write('FizzBuzz <br>');
        continue;
    }
    document.write(i + '<br>');
}*/

/*Bài 8:Game đoán số

Nâng cấp game "Hãy thử đoán xem!"
1. Thiết kế giao diện: Giao diện chỉ gồm 1 Button "Chơi": cho phép người dùng bắt đầu chơi hoặc chơi lại
2. Mô tả ứng dụng: Khi người dùng nhấn vào button “Chơi”:
Ứng dụng hiển thị cửa sổ prompt cho phép người dùng nhập vào muốn đoán trong khoảng nào
Ứng dụng chọn ra số ngẫu nhiên trong khoảng mà ngườI dùng chọn
Ứng dụng hiển thị cửa số prompt cho người dùng nhập giá trị mà người dùng đoán
Ứng dụng lấy kết quả và so sánh với giá trị ngẫu nhiên.
Nếu bằng thì hiển thị thông báo chúc mừng và kết thúc lượt chơi
Nếu lớn hơn hoặc bé thua thì hiển thị thông báo lớn hơn hay bé thua và cho phép người dùng lựa chọn lại.
Chú ý: Người dùng chỉ được lựa chọn tối đa ba lần*/
function  doan_so(){
    let num = +prompt('Nhập khoảng bạn muốn đoán: ');
    let number_random = Math.floor(Math.random() * num);
    console.log(number_random);
    let number_check = +prompt('Bạn đoán là:');
    let count = 0;
    while (number_check !== number_random){
        count ++;
        if (count === 4){
            alert('Bạn đã đoán quá 3 lần');
            break;
        } else if (number_check < number_random){
            alert('Bạn đoán nhỏ hơn');
        } else {
            alert('Bạn đoán lớn hơn');
        }
        number_check = +prompt('Bạn đoán là:');
    }if (count === 4){
        alert('Bạn đã đoán quá 3 lần');
    } else {
        alert('Chúc mừng bạn đã đoán đúng');
    }
}
