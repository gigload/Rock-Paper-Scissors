let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let choice = Number(prompt("Choose: 1=Rock, 2=Paper or 3=Scissors"));
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getComputerChoice(min, max) {
    let randomNum;
    randomNum = Math.random() * (max - min) + min;
    if (randomNum <= 2) {
        return "Rock";
    } else if (randomNum <= 3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You won")
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You won")
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You won")
        humanScore++;
    } else {
        console.log("You Lost!")
        computerScore++;
    }
}

for (let i = 0; i < 5; i++) {
    console.log(("Round") + (i + 1));

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice(1, 4);

    playRound(humanSelection, computerSelection);
    console.log("Score: Human " + humanScore + " - Computer " + computerScore);
}

if (humanScore > computerScore) {
    console.log("Game Over: You are the overall winner!");
} else if (computerScore > humanScore) {
    console.log("Game Over: The computer won the match.");
} else {
    console.log("Game Over: The match is a tie.");
}