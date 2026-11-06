
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {

    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
    return "rock";
    }

    else if (number === 1) {
    return "paper";
    }

    else {
    return "scissors";
    }
}

function getHumanChoice(){
        let choice = prompt("Choose rock, paper or scissors");
        return choice;  
        
    }

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "It's a tie!"; 
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
       (humanChoice === "scissors" && computerChoice === "paper") ||
       (humanChoice === "paper" && computerChoice === "rock")){
           humanScore++;
           return "you win!";
        }
        
        else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "scissors" && computerChoice === "rock") ||
            (humanChoice === "paper" && computerChoice === "scissors")) {
                computerScore++;
                return "Win Computer";
            }           
}
            
function playGame() {
            for (let i = 0; i < 5; i++) {
                let computerChoice = getComputerChoice();
                let humanChoice = getHumanChoice();
                let result = playRound(humanChoice, computerChoice);
                console.log(result);
            }
            console.log("Final score:");
            console.log("Human: " + humanScore);
            console.log("Computer: " + computerScore);

            if (humanScore > computerScore){
            return "you Win!";}
            else if (humanScore < computerScore){
            return "Win Computer!";}
            else {
            return "It's a tie!";}

}
    console.log(playGame());
