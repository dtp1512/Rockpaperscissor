// prompting the user for a choice //


askUser();                                                                          

function askUser(){
    const choice = prompt("Choose rock, paper, or scissors");
    const lowerchoice = choice.toLowerCase();
    if (lowerchoice == "rock" || lowerchoice == "paper" || lowerchoice == "scissors") {
        alert("Thank you");
        console.log (lowerchoice);
    } else if (lowerchoice == "") {
        alert("Please choose");
        askUser();
    } else {
        alert("try again");
        askUser();
    }
    return lowerchoice;
}




