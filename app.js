

var rock;
var paper;
var scissors;

function playerChoice() {

}

function computerChoice() {
    var computerChoice = Math.random();
    if (computerChoice <= 0.33) {
        computerChoice = "rock";
        return "rock";
    }
    else if (0.34 <= computerChoice && computerChoice <= 0.66) {
        computerChoice = "paper";
        return "paper";
    }
    else {
        computerChoice = "scissors";
        return "scissors";
    }



}
function play(playerChoice) {
    var pc = playerChoice;
    var cc = computerChoice();

    if (pc === cc) {
        alert("tie");
    }
    else if (pc === "rock" && cc === "scissors") {
        alert("You win.");
    }
    else if (pc === "paper" && cc === "rock") {
        alert("You win.");
    }
    else if (pc === "scissors" && cc === "paper") {
        alert("You win.");
    }
    else if (pc === "scissors" && cc === "rock") {
        alert("Computer wins. Too bad.");
    }
    else if (pc === "rock" && cc === "paper") {
        alert("Computer wins. Too bad.");
    }
    else if (pc === "paper" && cc === "scissors") {
        alert("Computer wins. Too bad.");
    }
}


   

  