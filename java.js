

let humanScore = 0;
let computerScore = 0;
let gameOver = false;


function getComputerChoice() {

    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
    return "piedra";
    }

    else if (number === 1) {
    return "papel";
    }

    else {
    return "tijera";
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "Empate!"; 
    }
    if ((humanChoice === "piedra" && computerChoice === "tijera") ||
       (humanChoice === "tijera" && computerChoice === "papel") ||
       (humanChoice === "papel" && computerChoice === "piedra")){
           humanScore++;
           return "Ganaste!";
        }
        
        else if (
            (humanChoice === "piedra" && computerChoice === "papel") ||
            (humanChoice === "tijera" && computerChoice === "piedra") ||
            (humanChoice === "papel" && computerChoice === "tijera")) {
                computerScore++;
                return "Ganó la Computadora";
            }           
}
  const humanScoreElement=document.querySelector("#human-score");
  const computerScoreElement=document.querySelector("#computer-score");
  const roundResult = document.querySelector("#round-result");
  const gameResult= document.querySelector("#game-result");
  const restartButton= document.querySelector("#restart");


    const rockButton = document.querySelector("#piedra");
    const paperButton = document.querySelector("#papel");
    const scissorsButton = document.querySelector("#tijera");

    rockButton.addEventListener("click",function() {
        playGame("piedra");
    });
    paperButton.addEventListener("click",function() {
        playGame("papel");
    });
    scissorsButton.addEventListener("click",function() {
        playGame("tijera");
    });
    
    function playGame(humanChoice) {
        if (gameOver) {
            return;
        }
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        roundResult.textContent= result;
        humanScoreElement.textContent= humanScore;
        computerScoreElement.textContent= computerScore;
        gameResult.textContent =
    `Vos elegiste ${humanChoice} y la computadora eligió ${computerChoice}.`;

    
    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;

    if (humanScore === 5) {
            roundResult.textContent = "¡Felicitaciones! Ganaste la partida.";
        } else {
            roundResult.textContent = "¡La computadora ganó la partida!";
        }

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }

    function restartGame() {
        
humanScore = 0;
computerScore = 0;

gameOver = false;

humanScoreElement.textContent = humanScore;
computerScoreElement.textContent = computerScore;

roundResult.textContent = "¡Que comience el juego!";
gameResult.textContent = "Primero elegí una opción.";

rockButton.disabled = false;
paperButton.disabled = false;
scissorsButton.disabled = false;
}

restartButton.addEventListener("click", restartGame);

}