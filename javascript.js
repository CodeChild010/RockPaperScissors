
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

///////////////////////////////////////

function playRound(playerSelection, computerSelection) {
    let result;
    
    if (computerSelection === "Paper" && playerSelection === "ROCK") {
        result = alert("You lose! Paper beats Rock")
    }
    return result;
}

///////////////////////////////////////


function game() {
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("What's your move, player?").toUpperCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

///////////////////////////////////////

game();
