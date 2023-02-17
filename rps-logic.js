getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3 + 1);
    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else if (randomNum === 3) {
        return "Scissors";
    };
};
getPlayerChoice = () => {
    let playerChoice = prompt("Rock, paper, or scissors. Which do you choose?")
    if (playerChoice.toLowerCase() == "rock") {
        return "Rock";
    } else if (playerChoice.toLowerCase() == "paper") {
        return "Paper";
    } else if (playerChoice.toLowerCase() == "scissors") {
        return "Scissors";
    };
};

playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "draw";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "lose";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "win";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "lose";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "win";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "lose";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "win";
    };
};

game = (playerSelection) => {
    let playerScore = 0;
    let computerScore = 0;
    //for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection) == "win") {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else if (playRound(playerSelection, computerSelection) == "lose") {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else if (playRound(playerSelection, computerSelection) == "draw") {
            console.log(`Draw!`);
        }
    //}
    console.log(`Player: ${playerScore}     Computer: ${computerScore}`)
}

game()

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("check")
        console.log(game(button.id))
    })
})