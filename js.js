function computerPlay (){
    let choice = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * choice.length)
    return choice[rand]
}

function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("rock, paper or scissors?: ").toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return 2
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 1
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return 0
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return 0
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 1
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return 0
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 1
    } else {
        return prompt("Please enter a valid selections (rock, paper or scissors): ")
    }
}

function game () {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        result = playRound()
        if (result === 1) {
            ++playerScore;
            console.log("You win.")
            console.log(`You: ${playerScore} Computer: ${computerScore}`)
        } else if (result === 0) {
            ++computerScore
            console.log("Computer wins.")
            console.log(`You: ${playerScore} Computer: ${computerScore}`)
        } else {
            console.log(`No points awarded. You: ${playerScore} Computer: ${computerScore}`)
        }  
    }
    if (playerScore > computerScore) {
        console.log("You won the 5 round match.")
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins the 5 round match.")
    }
    else {
        console.log("Game ends in a tie after 5 rounds.")
    }
}


game()