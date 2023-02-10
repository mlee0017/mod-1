const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const resetBtn = document.querySelector(".reset");
let playerChoice;
let computerChoice;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    playerChoice = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${playerChoice}`;
    computerText.textContent = `Cpu: ${computerChoice}`;
    resultText.textContent = winner();
}));

function computerTurn(){

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber){
      case 1:
        computerChoice = "scissors";
        break;
      case 2:
        computerChoice = "rock";
        break;
      case 3:
        computerChoice = "paper";
        break;
    }
}
function winner(){
    if(playerChoice == computerChoice){
      return "draw!";
    }
    else if(playerChoice == "rock" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "scissors"){
        return "cpu wins!" 
    }
    else if(playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "rock"){
      return  "player wins!"
    }
}

function reset() {
    playerText.textContent = `Player:`
    computerText.textContent = `Cpu:`
    resultText.textContent = ""
}

function hideRules() {
    var gameRules = document.getElementById("game-rules");
    if (gameRules.style.display === "none") {
      gameRules.style.display = "block";
    } else {
      gameRules.style.display = "none";
    }
  }

  // update images
  