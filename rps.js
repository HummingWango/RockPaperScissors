let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let n = Math.random()*3;
    if (n < 1) {
        return "rock";
    } else if (n < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("What did you play?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore+=1;
            console.log(`You lost...${computerChoice} beats ${humanChoice}.`);
            return;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore+=1;
            console.log(`You lost...${computerChoice} beats ${humanChoice}.`);
            return;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore+=1;
            console.log(`You lost...${computerChoice} beats ${humanChoice}.`);
            return;
        }
    }
    if (humanChoice === computerChoice) {
        console.log(`A tie! ${computerChoice} ties ${humanChoice}`);
        return;
    }
    humanScore +=1;
    console.log(`You won!!! ${humanChoice} beats ${computerChoice}`);
    return;
}


function playGame(){
    for (let i = 0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Your Score: ${humanScore}     Computer Score: ${computerScore}`)
}

playGame();
