// Create variables
let value01;
let value02;

// Create function to compare the numbers
function largerOrSmaller() {
    
    // Get input from user
    value01 = parse.Int(prompt('Please enter a number:'));
    value02 = parse.Int(prompt('Please enter a second number:'));

    // Conditional statements to compare the numbers
    if (value01 > value02) {
        document.body.innerHTML = "The larger number is: " + value01;
    } else if (value02 > value01) {
        document.body.innerHTML = "The larger number is: " + value02;
    } else {
        document.body.innerHTML = "Both numbers are equal.";
    }
}
compareNumbers();