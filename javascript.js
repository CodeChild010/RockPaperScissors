



const getComputerChoice = (function() {
    result = Math.floor(Math.random() * 3);
    if (result === 0) {
        result = "Rock";
    }
    else if (result === 1) {
        result = "Paper";
    }
    else {
        result = "Scissors";
    }
    return result;
});



function playRound(playerSelection, computerSelection) {
    let result;
    playerSelection = playerSelection.toUpperCase();
    
    if (computerSelection === "Paper" && playerSelection === "ROCK") {
        result = alert("You lose! Paper beats Rock")
    }
    return result;
}


const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log((playRound(playerSelection, computerSelection)));