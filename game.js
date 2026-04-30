function getComputerChoice(min, max) {
    let randomNum
    randomNum = Math.random() * (max - min) + min;
    if (randomNum <= 2) {
        return "Rock";
    } else if (randomNum <= 3) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

console.log(getComputerChoice(1, 4))