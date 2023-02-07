
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
    
    if (computerSelection === "Paper") {

        if (playerSelection === "ROCK") {          
            result = alert("You lose! Paper beats Rock")

            } else if (playerSelection === "SCISSOR") {
            result = alert("You Win! Scissor beats paper")

            } else if (playerSelection === "PAPER") {
            result = alert("Draw. Paper = Paper")
            }
        }


    else if (computerSelection === "Rock") {

        if (playerSelection === "ROCK") {          
            result = alert("Draw. Rock = Rock")

            } else if (playerSelection === "SCISSOR") {
            result = alert("You lose! Rock beats Scissor")

            } else if (playerSelection === "PAPER") {
            result = alert("You win! Paper beats Rock")
            }   
        }
            
            
    else if (computerSelection === "Scissor") {

        if (playerSelection === "ROCK") {          
            result = alert("You win! Rock beats Scissor")

            } else if (playerSelection === "SCISSOR") {
            result = alert("Draw. Scissor = Scissor")

            } else if (playerSelection === "PAPER") {
            result = alert("You lose! Scissor beats Paper")
            }
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
