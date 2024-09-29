// Collect a number between 1 and 100 from the user
function gradeAssignment() {

    // Get input from user for a score
    let score = parseInt(prompt("Please enter a number between 1 and 100: "));

    // Check if the number is within the valid range (1-100)
    if (isNaN(score) || score < 1 || score > 100) {
        alert("Only numbers between 1 and 100 are accepted.");
    } else {
        // Use conditional statements to evaluate the grade
        if (score >= 90 && score <= 100) {
            alert("You received an A");
        } else if (score >= 80 && score <= 89) {
            alert("You received a B");
        } else if (score >= 70 && score <= 79) {
            alert("You received a C");
        } else if (score >= 60 && score <= 69) {
            alert("You received a D");
        } else {
            alert("You received an F");
        }
    }
}
gradeAssignment();