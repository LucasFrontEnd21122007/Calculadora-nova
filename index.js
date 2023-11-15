let currentInput = '';
let operator = '';
let firstInput = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstInput = '';
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (currentInput !== '') {
        operator = op;
        firstInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculate() {
    if (operator !== '' && currentInput !== '') {
        let result;
        const num1 = parseFloat(firstInput);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                break;
        }

        currentInput = result.toString();
        operator = '';
        firstInput = '';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
