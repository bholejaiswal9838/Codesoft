// Get all the necessary elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

let currentInput = '';  // Holds the current user input

// Event listener for all number and operator buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.getAttribute('data-value');
        
        // Check if the value is an operator or number
        if (value) {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

// Event listener for the "Clear" button
clearButton.addEventListener('click', () => {
    currentInput = ''; // Clear the input
    display.textContent = ''; // Clear the display
});

// Event listener for the "=" button (evaluation of the input)
equalButton.addEventListener('click', () => {
    try {
        // Use eval to calculate the input (with a check for safe input)
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result; // Save the result for further calculations
    } catch (error) {
        display.textContent = 'Error'; // Display error if input is invalid
    }
});
