// Enumeration to track the available operations.
// The numbers don't mean anything- they're just to keep the Javascript engine happy.
const Operator = {
    NONE: 0,
    ADD: 1,
    SUBTRACT: 2,
    MULTIPLY: 3,
    DIVIDE: 4
}

// Store the operator and operands selected by the user.
// Since there's only two operands, no point in having an array or classes
let operand1 = 0;
let selected_operator = null; // must be type Operator above.
let operand2 = 0
let result = 0;

// Run the actual calculation.
// Triggered on the user hitting the Enter key on the UI.
function operate() {
    console.log("Beginning calculation");
}

// A number key has been pressed, so update accordingly.
function numberPressed(buttonName) {
    console.log(buttonName + " number has been pressed");

    // Determine if we're dealing with the first or second operand.
    if (selected_operator == null) {
        // We're dealing with the first operand
        operand1 = updateOperand(operand1, Number(buttonName));
        console.log("New operand 1 is " + operand1);
    } else {
        // We're dealing with the second operand
        operand2 = updateOperand(operand1, buttonName);
    }
}

// Print which number button has been pressed.
function operatorPressed(buttonName) {
    console.log(buttonName);
    // Remember to check if the first operand has been filled in
}

// Reset everything to zero.
function clear() {
    console.log("Clearing")
}

// Update the selected operand with a specific digit
function updateOperand(operand, digit) {
    newOperand = operand * 10; // Shift all digits to the left; add a zero.
    newOperand = newOperand + digit; // Add the specified digit to the ones position of the new operand.
    return newOperand
}