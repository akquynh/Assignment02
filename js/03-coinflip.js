// Create random coinFlip variable
let coinFlip = Math.round(Math.random());

// Prompt the user to select "Heads" or "Tails"
let choice = prompt('Select "Heads" or "Tails": ').toLowerCase();

// Conditional logic to check the result of the coin flip and user's choice
if (coinFlip === 0) {
    // Coin flip result is heads (0)
    if (choice === 'heads') {
        alert('The flip was heads and you chose heads...you win!');
    } else if (choice === 'tails') {
        alert('The flip was heads but you chose tails...you lose!');
    } else {
        alert('Invalid choice. Please enter "Heads" or "Tails".');
    }
} else {
    // Coin flip result is tails (1)
    if (choice === 'heads') {
        alert('The flip was tails but you chose heads...you lose!');
    } else if (choice === 'tails') {
        alert('The flip was tails and you chose tails...you win!');
    } else {
        alert('Invalid choice. Please enter "Heads" or "Tails".');
    }
}