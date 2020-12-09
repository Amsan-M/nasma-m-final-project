//prompt("This is a test");

$(document).ready(function () {

    // Player dices
    const playerDice1  = document.getElementById("player-dice1");
    const playerDice2  = document.getElementById("player-dice2");
    const playerScore1 = document.getElementById("player-score1");
    const playerScore2 = document.getElementById("player-score2");
    const playerScore3 = document.getElementById("player-score3");

    const playerScoreTotal = document.getElementById("player-score-total");

    // Computer dices
    const computerDice1  = document.getElementById("computer-dice1");
    const computerDice2  = document.getElementById("computer-dice2");
    const computerScore1 = document.getElementById("computer-score1");
    const computerScore2 = document.getElementById("computer-score2");
    const computerScore3 = document.getElementById("computer-score3");

    const computerScoreTotal = document.getElementById("computer-score-total");

    // Buttons
    const buttonRollDices = document.getElementById("roll-dices");
    const buttonRestart   = document.getElementById("restart");

    //Dices images
    const mainPicture1InHTML     = document.getElementById("dice-image1");
    const mainPicture2InHTML     = document.getElementById("dice-image2");
    const mainPictureComp1InHTML = document.getElementById("comp-dice-image1");
    const mainPictureComp2InHTML = document.getElementById("comp-dice-image2");

    //Scores outputs
    const scores       = document.getElementById("score-title");
    const roundsScore1 = document.getElementById("round1");
    const roundsScore2 = document.getElementById("round2");
    const roundsScore3 = document.getElementById("round3");
    const scoresTotal  = document.getElementById("roundsTotal");
   

    //count the rounds
    let roundCounter = 0;

    let gameCompleted = false;

    // Dices

    let firstRoundPlayer = 0;
    let firstRoundComputer = 0;

    let scoreComputer1 = 0;
    let scorePlayer2 = 0;
    let scoreComputer2 = 0;
    let finalScorePlayer = 0;
    let finalScoreComputer = 0;
    let currentRoundPlayer = 0;


    //the first image # in the group
    let currentImageNumber = 1;

    //the last image # in the group
    const maxImageNumber = 6;

    // roll the dices 
    $(buttonRollDices).click(function () {

        let playerD1 = Math.floor((Math.random() * 6) + 1);
        let playerD2 = Math.floor((Math.random() * 6) + 1);
        let computerD1 = Math.floor((Math.random() * 6) + 1);
        let computerD2 = Math.floor((Math.random() * 6) + 1);

        //Game conditions:
        // If any of the dices is equal to 1 the round is equal 0
        // If the dices throws a pair the scor should be doubled
        // for player 
        if ((playerD1 == 1) || (playerD2 == 1)) {
            currentRoundPlayer = 0;
        } else if (playerD1 == playerD2) {
            currentRoundPlayer = (playerD1 + playerD2) * 2;
        } else {
            currentRoundPlayer = playerD1 + playerD2
        }

        //Game conditions for computer 
        if ((computerD1 == 1) || (computerD2 == 1)) {
            currentRoundComputer = 0;
        } else if (computerD1 == computerD2) {
            currentRoundComputer = (computerD1 + computerD2) * 2;
        } else {
            currentRoundComputer = (computerD1 + computerD2);
        }


        roundCounter++;
        console.log(roundCounter);


        if (roundCounter == 1) {

            $(scores).text("Scores");

            $(roundsScore1).text("First Round");
            $(playerDice1).text(playerD1);
            $(playerDice2).text(playerD2);
           
            mainPicture1InHTML.src = `images/player-dice-${playerD1}.svg`;
            mainPicture2InHTML.src = `images/player-dice-${playerD2}.svg`;
            firstRoundPlayer = currentRoundPlayer;
       
            $(playerScore1).text("Player: " + firstRoundPlayer);


            $(computerDice1).text(computerD1);
            $(computerDice2).text(computerD2);
            mainPictureComp1InHTML.src = `images/computer-dice-${computerD1}.svg`;
            mainPictureComp2InHTML.src = `images/computer-dice-${computerD2}.svg`;
            firstRoundComputer = currentRoundComputer;
            $(computerScore1).text("Computer: " + firstRoundComputer);

        } if (roundCounter == 2) {

            $(roundsScore2).text("Second Round");
            $(playerDice1).text(playerD1);
            $(playerDice2).text(playerD2);
            mainPicture1InHTML.src = `images/player-dice-${playerD1}.svg`;
            mainPicture2InHTML.src = `images/player-dice-${playerD2}.svg`;
            scorePlayer2 = currentRoundPlayer + firstRoundPlayer;
            $(playerScore2).text("Player: " + currentRoundPlayer );

            $(computerDice1).text(computerD1);
            $(computerDice2).text(computerD2);
            mainPictureComp1InHTML.src = `images/computer-dice-${computerD1}.svg`;
            mainPictureComp2InHTML.src = `images/computer-dice-${computerD2}.svg`;
            scoreComputer2 = firstRoundComputer + currentRoundComputer;
            $(computerScore2).text("Computer: " +  currentRoundComputer);


        } else if (roundCounter == 3) {
            $(roundsScore3).text("Third Round");
            popUp();
            gameCompleted = true;

            $(buttonRollDices).hide();
            $(playerDice1).text(playerD1);
            $(playerDice2).text(playerD2);
            mainPicture1InHTML.src = `images/player-dice-${playerD1}.svg`;
            mainPicture2InHTML.src = `images/player-dice-${playerD2}.svg`;
            finalScorePlayer = scorePlayer2 + currentRoundPlayer;
            $(playerScore3).text("Player: " + currentRoundPlayer);


            $(computerDice1).text(computerD1);
            $(computerDice2).text(computerD2);
            mainPictureComp1InHTML.src = `images/computer-dice-${computerD1}.svg`;
            mainPictureComp2InHTML.src = `images/computer-dice-${computerD2}.svg`;
            finalScoreComputer = scoreComputer2 + currentRoundComputer;
            $(computerScore3).text("Computer: " + currentRoundComputer);
            $(scoresTotal).text("Total:");
            $(playerScoreTotal).text("Player: "+finalScorePlayer);
            $(computerScoreTotal).text("Computer: "+finalScoreComputer);

            $("#result").text("GAME OVER");
            if (finalScoreComputer > finalScorePlayer) {
                $("#result-winner").text("You loose!");
                return;
            } else if (finalScoreComputer < finalScorePlayer) {             
                $("#result-winner").text("You Win!");
                return;
            } else {
                $("#result-winner").text("No One Wins");
                return;
            }

        }


        // Reload the game when click on restart
        $(buttonRestart).click(function () {
            location.reload();
        });


        function popUp() {
            if (roundCounter == 3) {
                $("#pop-up-winner").animate({ opacity: '1', }, 3000);

            }
        }


    });


});