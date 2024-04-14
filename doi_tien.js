function changeMoney() {
    let amount = parseFloat(document.getElementById('amount').value);
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let result;
    if (from === 'VND' && to === 'USD') {
        result = 'Result: ' + (amount / 23000) + '$';
    } else if (from === 'USD' && to === 'VND') {
        result = 'Result: ' + (amount * 23000) + 'VNĐ';
    } else if (from === 'VND' && to === 'VND') {
        result = 'Result: ' + amount + 'VNĐ';
    } else {
        result = 'Result: ' + amount + '$';
    }
    document.getElementById('result').innerHTML = result;
}