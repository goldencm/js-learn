function getRandonInt(max) {
    return Math.floor(Math.random() * max);
}

function game() {
    let chosen_number = 1;

    while (isNaN(chosen_number)) {
        chosen_number = getRandonInt(parseInt(prompt("Choose the highest maximum random number", "10000"), 10));
    }

    let tries = new Number(15);
    let win = new Boolean(false);
    while (tries != 0 && win == false) {
        let guess = NaN;

        while (isNaN(guess) == true) {
            guess = parseInt(prompt(`You have ${tries} tries left\nGuess a number`), 10);
            if (isNaN(guess) || guess < 0 || guess > guess) {
                alert("Please choose a valid number");
            }
        }

        if (guess < chosen_number) {
            alert(`Your guess ${guess} is less than the winning number`);
        } else if (guess > chosen_number) {
            alert(`Your guess ${guess} is greater than the winning number`);
        } else {
            alert("YOU GUESSED THE WINNING NUMBER");
            win = true;
        }
        guess = NaN;
        tries--;
    }

    if (win) {
        alert(`CONGRATULATIONS!`)
    } else {
        alert("Sorry you couldn't guess it")
    }
}

let game_prompt = true;

while (game_prompt) {

    game_prompt = confirm("Do you want to play guess the number?");

    if (game_prompt) {
        game()
    }

}

alert("Goodbye!")



