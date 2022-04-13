let playerScore = 0 ;
let computerScore = 0;

function scoreMessage (out, point) {
    const container = document.querySelector('#container');
    const results = document.createElement('div');
    results.classList.add('results');
    
    if (playerScore === 5) {
        results.textContent = "You win the game!!!"
        container.appendChild(results)
    } else if (computerScore === 5) {
        results.textContent = "Computer wins. :("
        container.appendChild(results)
    } else {
        if (out === "tie") {
            results.textContent = `Tie. No points awarded. You: ${playerScore} Computer: ${computerScore}`
            container.appendChild(results)
        } else if (out === "lose") {
            ++computerScore;
            results.textContent = `Computer wins. You: ${playerScore} Computer: ${computerScore}`
            container.appendChild(results)
        } else {
            ++playerScore;
            results.textContent = `You win. You: ${playerScore} Computer: ${computerScore}`;
            container.appendChild(results)
        }
    }
}

function computerPlay (){
    let choice = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * choice.length)
    return choice[rand]
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return scoreMessage("tie")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return scoreMessage("win")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return  scoreMessage("lose")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return scoreMessage("lose")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return scoreMessage("win")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {    
        return scoreMessage("lose")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return scoreMessage("win")
    }
}

const button = document.querySelectorAll('#button');
button.forEach((btn) => {
    btn.addEventListener('click', () => {
        let player = btn.textContent.toLowerCase()
        let computer = computerPlay()
        playRound(player, computer)
    });

});
