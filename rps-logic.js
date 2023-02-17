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
getPlayerChoice = (playerChoice) => {
    //let playerChoice = prompt("Rock, paper, or scissors. Which do you choose?")
    if (playerChoice == "rock") {
        return "Rock";
    } else if (playerChoice == "paper") {
        return "Paper";
    } else if (playerChoice == "scissors") {
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

const results = document.querySelector(".results")
const round = document.querySelector(".round")
const score = document.querySelector(".score")

let playerScore = 0;
let computerScore = 0;

winnerFound = (winner) => {
    const winnerAnnouncer = document.createElement("h1")
    winnerAnnouncer.classList.add("winner")
    winnerAnnouncer.textContent = `WINNER: ${winner}!`;
    results.appendChild(winnerAnnouncer)
    playerScore = 0;
    computerScore = 0;
}

game = (button) => {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice(button)
        if (playRound(playerSelection, computerSelection) == "win") {
            playerScore++;
            round.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (playRound(playerSelection, computerSelection) == "lose") {
            computerScore++;
            round.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        } else if (playRound(playerSelection, computerSelection) == "draw") {
            round.textContent = `Draw!`;
        }
    score.textContent = `Player: ${playerScore}     Computer: ${computerScore}`
    if (playerScore === 5) {
        winnerFound("PLAYER")
    } else if (computerScore === 5) {
        winnerFound("COMPUTER")
    }
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        game(button.id)
    })
})