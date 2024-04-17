/*
function addition() {
    let num1 = parseFloat(document.getElementById("num_a").value);
    let num2 = parseFloat(document.getElementById("num_b").value);
    let result = num1 + num2;
    document.getElementById("result").innerHTML = 'Tổng của hai số a và b là: ' + result;
    
}

function subtraction() {
    let num1 = parseFloat(document.getElementById("num_a").value);
    let num2 = parseFloat(document.getElementById("num_b").value);
    let result = num1 - num2;
    document.getElementById("result").innerHTML = 'Hiệu của hai số a và b là: ' + result;

}

function multiplication() {
    let num1 = parseFloat(document.getElementById("num_a").value);
    let num2 = parseFloat(document.getElementById("num_b").value);
    let result = num1 * num2;
    document.getElementById("result").innerHTML = 'Nhân hai số a và b là: ' + result;
}


function division() {
    let num1 = parseFloat(document.getElementById("num_a").value);
    let num2 = parseFloat(document.getElementById("num_b").value);
    let result = num1 / num2;
    document.getElementById("result").innerHTML = 'Chia của hai số a và b là: ' + result;
}

*/

/*Caculator Level Up*/
function caculator(operation) {
    let num_1 = parseFloat(document.getElementById("num_a").value);
    let num_2 = parseFloat(document.getElementById("num_b").value);
    let result;
    if (operation === 'add'){
        result = 'Tổng của hai số a và b là: ' + (num_1 + num_2);
    }
    else if (operation === 'sub'){
        result ='Hiệu của hai số a và b là: ' + (num_1 - num_2);

    }
    else if (operation ==='mul'){
        result = 'Nhân hai số a và b là: ' + (num_1 * num_2);
    }
    else if (operation === 'div'){
        result ='Chia hai số a và ba là: ' + (num_1 / num_2);
    }
    document.getElementById("result").innerHTML = result;
}
