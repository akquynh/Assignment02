// Create variables
let value01;
let value02;

// Create function to compare the numbers
function largerOrSmaller() {

    // Get input from user
    value01 = parseInt(prompt('Please enter a number:'));
    value02 = parseInt(prompt('Please enter a second number:'));

    // Conditional statements to compare the numbers
    if (value01 > value02) {
        console.log("The larger number is: " + value01);
    } else if (value02 > value01) {
        console.log("The larger number is: " + value02);
    } else {
        console.log("Both numbers are equal.");
    }
}
largerOrSmaller();