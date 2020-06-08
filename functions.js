const displayElement = document.getElementById('bar');
const acElement = document.getElementById('AC');
let operandA, // First number
    operandB, // Second number 
    operator, // +, -, *, / or %
    result,
    isOpB, // If values are entered to operandB or not
    equalPressed;

// Number clicked handler
const numberClicked = (elementID) => {
    acElement.innerHTML = 'C'; // Sets the 'AC' --> 'C'
    // Checks if the inserted number will append to operand A or B
    if (operandA != "" && !equalPressed && !isOpB) {
        displayElement.innerHTML = '0';
        isOpB = true;
    }
    const pressedVal = document.getElementById(elementID).innerHTML; // The press number value
    const displayVal = displayElement.innerHTML; // Current display value
    if (displayVal.length >= 9) return; // Limiting length of displayed value
    if (displayVal == '0') {
        displayElement.innerHTML = (pressedVal == '.') ? '0.' : pressedVal;
    } else if (!displayVal.includes('.') || pressedVal != '.') {
            displayElement.innerHTML += pressedVal;
    }
};

// Changes the sign of the number on display
const invert = () => {
    if (displayElement.innerHTML.charAt(0) == '-') {
        displayElement.innerHTML = displayElement.innerHTML.slice(1, displayElement.innerHTML.length);
    } else {
        displayElement.innerHTML = '-' + displayElement.innerHTML;
    }
};

// Clears the display and values (uses clearVars() function)
const clearBar = () => {
    acElement.innerHTML = 'AC';
    displayElement.innerHTML = 0;
    clearVars();
};

// sets a variable value to be as the display
const setValue = () => {
    return (displayElement.innerHTML.includes('.')) ? parseFloat(displayElement.innerHTML) : parseInt(displayElement.innerHTML);
};

// Sets the operandA to be the value of the display and the operator will be the pressed element
const operation = (elementId) => {
    operandA = setValue();
    operandB = "";
    isOpB = false;
    operator = document.getElementById(elementId).innerHTML;
    if (operator == '%') {
        displayElement.innerHTML = operandA / 100;
    }
};

// When '=' is pressed, will compute the result according to the operator.
const evaluateExpression = () => {
    if (operandB == '') { // Sets operandB value only if it is already cleared
        operandB = setValue();
    }
    switch (operator) {
        case '+':
            displayElement.innerHTML = operandA + operandB;
            break;
        case '-':
            displayElement.innerHTML = operandA - operandB;
            break;
        case '×':
            displayElement.innerHTML = operandA * operandB;
            break;
        case '÷':
            displayElement.innerHTML = operandA / operandB;
            break;
        default:
            break;
    }
    operandA = setValue();
    result = operandA;
};

// Clears all values
const clearVars = () => {
    operandA = "";
    operandB = "";
    operator = "";
    result = "";
    isOpB = false;
    equalPressed = false;
};