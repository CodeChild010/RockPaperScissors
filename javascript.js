
alert(getComputerChoice());

function getComputerChoice() {
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
};
