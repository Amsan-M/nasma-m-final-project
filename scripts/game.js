//prompt("This is a test");

$(document).ready(function () {
const playerDice1    = document.getElementById("player-dice1");
const playerDice2     = document.getElementById("player-dice2");
const playerScore1     = document.getElementById("player-score1");
const playerScore2     = document.getElementById("player-score2");
const playerScore3     = document.getElementById("player-score3");

const computerDice1    = document.getElementById("computer-dice1");
const computerDice2     = document.getElementById("computer-dice2");
const computerScore1     = document.getElementById("computer-score1");
const computerScore2     = document.getElementById("computer-score2");
const computerScore3     = document.getElementById("computer-score3");
const buttonRollDices     = document.getElementById("roll-dices");
const buttonRestart     = document.getElementById("restart");

let roundCounter =0;

// Dices

let firstRoundPlayer=0;
let firstRoundComputer=0;

let scoreComputer1=0;
let scorePlayer2=0;
let scoreComputer2=0;
let finalScorePlayer=0;
let finalScoreComputer=0;


// roll the dices 
$( buttonRollDices).click(function () {

    let playerD1= Math.floor((Math.random() * 6) + 1);
    let playerD2= Math.floor((Math.random() * 6) + 1);
    let computerD1= Math.floor((Math.random() * 6) + 1);
    let computerD2= Math.floor((Math.random() * 6) + 1);
    let currentRoundPlayer= playerD1+playerD2;
    let currentRoundComputer= computerD1+computerD2;
    
    roundCounter++;
    console.log(roundCounter);


if(roundCounter == 1){
 
    $(playerDice1).text(playerD1);
    $(playerDice2).text(playerD2);
    firstRoundPlayer=currentRoundPlayer;
    $(playerScore1).text( firstRoundPlayer);
    $(playerScore1).text( "score first round player:" +firstRoundPlayer);


    $(computerDice1).text(computerD1);
    $(computerDice2).text(computerD2);
    firstRoundComputer= currentRoundComputer;
    //$(computerScore1).text( firstRoundComputer);
    $(computerScore1).text( "score first round computer:" + firstRoundComputer);
}if(roundCounter == 2){

    $(playerDice1).text(playerD1);
    $(playerDice2).text(playerD2);
    scorePlayer2= currentRoundPlayer+firstRoundPlayer;
    $(playerScore2).text("score second round player: "+scorePlayer2);


    $(computerDice1).text(computerD1);
    $(computerDice2).text(computerD2);
    scoreComputer2= firstRoundComputer+currentRoundComputer;
    $(computerScore2).text("score second round computer: "+scoreComputer2);

    
}else if(roundCounter == 3){

    $(buttonRollDices).hide();
    $(playerDice1).text(playerD1);
    $(playerDice2).text(playerD2);
    finalScorePlayer= scorePlayer2+currentRoundPlayer;
    $(playerScore3).text("score 3 round: "+firstRoundPlayer+" score second round : "+ finalScorePlayer);


    $(computerDice1).text(computerD1);
    $(computerDice2).text(computerD2);
    finalScoreComputer= scoreComputer2+currentRoundComputer;
    $(computerScore3).text("score third round: "+finalScoreComputer);

    if(finalScoreComputer > finalScorePlayer){
        $("#result").text("computer Wins");
        return;
    }else if(finalScoreComputer < finalScorePlayer){
        $("#result").text("you win");
        return;
    }else {
        $("#result").text("no one wins");
        return;
    }

}

    
});

// Reload the game when click on restart
$(buttonRestart).click(function () {
    location.reload();
});


});


