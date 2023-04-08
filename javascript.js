// prompting the user for a choice //


askUser();                                                                          

function askUser(){
    const choice = prompt("Choose rock, paper, or scissors");
    const playerchoice = choice.toLowerCase();
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

playRound()

function playRound() {
    if (askUser == "rock" && getComputerChoice() == "scissors") {
       alert("You win! Rock beats Scissors");
    } else if (askUser == "scissors" && getComputerChoice() == "paper") {
        alert("You win! Scissors beats Paper");
    } else if (askUser == "paper" && getComputerChoice() == "rock") {
        alert("You win! Paper beats Rock");
    } else if (askUser == getComputerChoice()) {
        alert("Tie! Play again!");
    } else {
            alert("You lose!");
   }


}




