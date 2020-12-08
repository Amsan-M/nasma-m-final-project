//prompt("This is a test");

$(document).ready(function () {
const playerDice1    = document.getElementById("player-dice1");
const playerDice2    = document.getElementById("player-dice2");
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

const mainPicture1InHTML = document.getElementById("dice-image1");
const mainPicture2InHTML = document.getElementById("dice-image2");
const mainPictureComp1InHTML = document.getElementById("comp-dice-image1");
const mainPictureComp2InHTML = document.getElementById("comp-dice-image2");
let roundCounter =0;

// Dices

let firstRoundPlayer=0;
let firstRoundComputer=0;

let scoreComputer1=0;
let scorePlayer2=0;
let scoreComputer2=0;
let finalScorePlayer=0;
let finalScoreComputer=0;
let currentRoundPlayer= 0;


    //the first image # in the group
    let currentImageNumber = 1;
   
    //the last image # in the group
    const maxImageNumber = 6;

// roll the dices 
$( buttonRollDices).click(function () {

    let playerD1= Math.floor((Math.random() * 6) + 1);
    let playerD2= Math.floor((Math.random() * 6) + 1);
    let computerD1= Math.floor((Math.random() * 6) + 1);
    let computerD2= Math.floor((Math.random() * 6) + 1);

    if((playerD1 == 1) || (playerD2 ==1)){
         currentRoundPlayer= 0;
    }else if (playerD1 == playerD2 ) {
     currentRoundPlayer=  (playerD1+playerD2) *2;
    }else{
        currentRoundPlayer= playerD1+playerD2 
    }

    if((computerD1 == 1) || (computerD2 ==1)){
         currentRoundComputer= 0;
   }else if(computerD1 == computerD2) {
     currentRoundComputer= (computerD1+computerD2)*2;
   }else{
        currentRoundComputer= (computerD1+computerD2);
    }


    roundCounter++;
    console.log(roundCounter);


if(roundCounter == 1){
 
    $(playerDice1).text(playerD1);
    $(playerDice2).text(playerD2);

  
    firstRoundPlayer=currentRoundPlayer;
    $(playerScore1).text( firstRoundPlayer);
    mainPicture1InHTML.src = `images/player-dice-${playerD1}.png`;
    mainPicture2InHTML.src = `images/player-dice-${playerD2}.png`;
    $(playerScore1).text( "score first round player:" +firstRoundPlayer);


    $(computerDice1).text(computerD1);
    $(computerDice2).text(computerD2);
    firstRoundComputer= currentRoundComputer;
    mainPictureComp1InHTML.src = `images/computer-dice-${computerD1}.png`;
    mainPictureComp2InHTML.src = `images/computer-dice-${computerD2}.png`;
    $(computerScore1).text( "score first round computer:" + firstRoundComputer);
}if(roundCounter == 2){

    $(playerDice1).text(playerD1);
    $(playerDice2).text(playerD2);
    mainPicture1InHTML.src = `images/player-dice-${playerD1}.png`;
    mainPicture2InHTML.src = `images/player-dice-${playerD2}.png`;
    scorePlayer2= currentRoundPlayer+firstRoundPlayer;
    $(playerScore2).text("score second round player: "+scorePlayer2);


    $(computerDice1).text(computerD1);
    $(computerDice2).text(computerD2);
    scoreComputer2= firstRoundComputer+currentRoundComputer;
    mainPictureComp1InHTML.src = `images/computer-dice-${computerD1}.png`;
    mainPictureComp2InHTML.src = `images/computer-dice-${computerD2}.png`;
    $(computerScore2).text("score second round computer: "+scoreComputer2);

    
}else if(roundCounter == 3){

    $(buttonRollDices).hide();
    $(playerDice1).text(playerD1);
    $(playerDice2).text(playerD2);
    mainPicture1InHTML.src = `images/player-dice-${playerD1}.png`;
    mainPicture2InHTML.src = `images/player-dice-${playerD2}.png`;
    finalScorePlayer= scorePlayer2+currentRoundPlayer;
    $(playerScore3).text("score 3 round: "+firstRoundPlayer+" score second round : "+ finalScorePlayer);


    $(computerDice1).text(computerD1);
    $(computerDice2).text(computerD2);
    mainPictureComp1InHTML.src = `images/computer-dice-${computerD1}.png`;
    mainPictureComp2InHTML.src = `images/computer-dice-${computerD2}.png`;
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

//



//need an animation handler 
// let bikeAnimationHandler;






// function rolllDice() {

//     while (currentImageNumber <= maxImageNumber) {
//         ;
//         if (currentImageNumber < maxImageNumber) {

//             currentImageNumber++;
//             mainPictureInHTML.src = `images/bike-${currentImageNumber}.jpg`;
//             bikeAnimationHandler = requestAnimationFrame(spinImage);
//         } else if (currentImageNumber = maxImageNumber) {
//             currentImageNumber = 1;
//             currentImageNumber++;


//             mainPictureInHTML.src = `images/bike-${currentImageNumber}.jpg`;

//             bikeAnimationHandler = requestAnimationFrame(spinImage);
//         }

//         break;
//     }




// }


});


