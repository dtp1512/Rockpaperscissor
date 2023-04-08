// prompting the user for a choice //
let playerchoice;
askUser()

function askUser(){
    const choice = prompt("Choose rock, paper, or scissors");
    playerchoice = choice.toLowerCase();
    if (playerchoice == "rock" || playerchoice == "paper" || playerchoice == "scissors") {
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
let computerChoice;

getRandomInt();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

getComputerChoice();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[getRandomInt(3)];

    
    return computerChoice;
}



//playround - probably need a "for loop" //


let i = 0;
let playerScore = 0;
let computerScore = 0;


for (let i = 0; i < 5; i++) {
    function playRound() {

        if (playerchoice == "rock" && computerChoice == "scissors") {
        alert("You win! Rock beats Scissors");
        playerScore++
        } else if (playerchoice == "scissors" && computerChoice == "paper") {
            alert("You win! Scissors beats Paper");
            playerScore++
        } else if (playerchoice == "paper" && computerChoice == "rock") {
            alert("You win! Paper beats Rock");
            playerScore++
        } else if (playerchoice == computerChoice) {
            alert("Tie! Play again!");
        } else {
                alert("You lose!");
                computerScore++
    }
}
}






 console.log("Player Score =" + " " + playerScore);
 console.log("Computer Score =" + " " + computerScore);

 //score()

 //function score() {
 //   if (playerScore == 1) {
  //      alert("YOU WIN THE GAME!!!");
 //   } else {
 //      alert("YOU LOSE!");
 //   }
// }