// prompting the user for a choice //
let playerchoice;
askUser()

function askUser(){
    const choice = prompt("Choose rock, paper, or scissors");
    playerchoice = choice.toLowerCase();
    if (playerchoice == "rock" || playerchoice == "paper" || playerchoice == "scissors") {
        alert("Thank you");
    } else if (playerchoice == "") {
        alert("Please choose");
        askUser();
    } else {
        alert("try again");
        askUser();
    }

    return playerchoice;
}

// computer choice //

getRandomInt();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

getComputerChoice();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[getRandomInt(3)];

    return (computerChoice);
}



//playround - probably need a "for loop" //

//playRound()

function playRound() {
    if (playerchoice == "rock" && getComputerChoice() == "scissors") {
       alert("You win! Rock beats Scissors");
    } else if (playerchoice == "scissors" && getComputerChoice() == "paper") {
        alert("You win! Scissors beats Paper");
    } else if (playerchoice == "paper" && getComputerChoice() == "rock") {
        alert("You win! Paper beats Rock");
    } else if (playerchoice == getComputerChoice()) {
        alert("Tie! Play again!");
    } else {
            alert("You lose!");
   }
}

