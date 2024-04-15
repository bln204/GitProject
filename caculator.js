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
    document.getElementById("result").innerHTML = 'Tổng của hai số a và b là: ' + result;

}

function multiplication() {
    let num1 = parseFloat(document.getElementById("num_a").value);
    let num2 = parseFloat(document.getElementById("num_b").value);
    let result = num1 * num2;
    document.getElementById("result").innerHTML = 'Tổng của hai số a và b là: ' + result;
}


function division() {
    let num1 = parseFloat(document.getElementById("num_a").value);
    let num2 = parseFloat(document.getElementById("num_b").value);
    let result = num1 / num2;
    document.getElementById("result").innerHTML = 'Tổng của hai số a và b là: ' + result;
}

