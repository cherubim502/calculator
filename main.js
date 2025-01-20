// Enumeration to track the available operations.
// The numbers don't mean anything- they're just to keep the Javascript engine happy.
const Operator = {
    NONE: "none",
    ADD: "plus",
    SUBTRACT: "minus",
    MULTIPLY: "multiply",
    DIVIDE: "divide"
}

// Store the operator and operands selected by the user.
// Since there's only two operands, no point in having an array or classes
let operand1 = 0
let selected_operator = null; // must be type Operator above.
let operand2 = 0
let result = 0;

// Run the actual calculation.
// Triggered on the user hitting the Enter key on the UI.
function operate() {
    console.log("Beginning calculation");
    updateOperator("=");
    if (selected_operator === Operator.ADD ) {
        result = operand1 + operand2;
    }
    else if (selected_operator ===  Operator.SUBTRACT ) {
        result = operand1 - operand2;
    }
    else if (selected_operator === Operator.MULTIPLY ) {
        result = operand1 * operand2;
    }
    else if (selected_operator === Operator.DIVIDE) {
        result = operand1 / operand2;
        // TODO prevent divide-by-zero
    }
    else {
        // An unknown input has been given- throw an error.
        alert("Unknown operator requested; \"" + selected_operator + "\"")
    }
    updateDisplay(result)
}

// A digit key has been pressed, so update accordingly.
function numberPressed(buttonName) {
    console.log(buttonName + " digit has been pressed");

    // Determine if we're dealing with the first or second operand.
    if (selected_operator == null) {
        // We're dealing with the first operand
        operand1 = updateOperand(operand1, Number(buttonName));
        console.log("New operand 1 is " + operand1);
        updateDisplay(operand1)
    } else {
        // We're dealing with the second operand
        operand2 = updateOperand(operand2, Number(buttonName));
        console.log("New operand 2 is " + operand2);
        updateDisplay(operand2)
    }
}

// Print which number button has been pressed.
function operatorPressed(buttonName) {
    console.log(buttonName + " operator has been pressed");

    // There's no check for if operand 1 has been filled in-
    // assuming that if the user presses the operand button,
    // they're using 0 as the first operand. Like a financial calculator.

    if (result != null) {
        operand1 = result; // Feed the result back into operand 1
        operand2 = 0; // Reset operand 2
        result = 0; // Reset result;
    }
    
    if (buttonName === "plus") {
        selected_operator = Operator.ADD;
        updateOperator("+")
    }
    else if (buttonName === "minus") {
        selected_operator = Operator.SUBTRACT;
        updateOperator("-")
    }
    else if (buttonName === "multiply") {
        selected_operator = Operator.MULTIPLY;
        updateOperator("X")
    }
    else if (buttonName === "divide") {
        selected_operator = Operator.DIVIDE;
        updateOperator("/")
    }
    else {
        // An unknown input has been given- throw an error.
        alert("Unknown operator requested; \"" + buttonName + "\"")
    }
}

// Reset everything to zero.
function clear() {
    console.log("Clearing")
    operand1 = 0;
    selected_operator = null;
    operand2 = 0;
    result = 0;
}

// Update the selected operand with a specific digit
function updateOperand(operand, digit) {
    newOperand = operand * 10; // Shift all digits to the left; add a zero.
    newOperand = newOperand + digit; // Add the specified digit to the ones position of the new operand.
    return newOperand
}

function updateDisplay(message) {
    document.getElementById("display").innerText = message
}

function updateOperator(operator){
    document.getElementById("operator").innerText = operator
}