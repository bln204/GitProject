function bMI() {
    /*console.log('1');*/
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let bmi = weight / (height * height);
    /*document.write(bmi);*/
    switch (true) {
        case (bmi < 18):
            document.write('BMI: ' + bmi.toFixed(2) + ' Underweight') ;
            break;
        case (bmi >= 18 && bmi < 25):
            document.write('BMI: ' + bmi.toFixed(2) + ' Normal');
            break;
        case (bmi >= 25 && bmi < 30):
            document.write('BMI: ' + bmi.toFixed(2) + ' Overweight');
            break;
        case (bmi >= 30 && bmi < 35):
            document.write('BMI: ' + bmi.toFixed(2) + ' Obese Class I');
            break;
    }
}

