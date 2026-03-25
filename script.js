let targetNumber = Math.floor(Math.random() * 100) + 1;

function submitGuess() {
    let guess = Number(document.getElementById('guessInput').value);
    let message = document.getElementById('message');

    if (guess === targetNumber) {
        message.innerHTML = "Correct! Well done.";
        document.getElementById('playAgainBtn').style.display = "block";
    } else if (guess > targetNumber) {
        message.innerHTML = "Too high!";
    } else {
        message.innerHTML = "Too low!";
    }
}

function playAgain() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('message').innerHTML = "";
    document.getElementById('guessInput').value = "";
    document.getElementById('playAgainBtn').style.display = "none";
}
