alert("This is a test");

$(document).ready(function () {
const playerDice1    = document.getElementById("player-dice1");
const playerDice2     = document.getElementById("player-dice2");
const computerDice1    = document.getElementById("computer-dice1");
const computerDice2     = document.getElementById("computer-dice2");

// Dices
let playerD1= Math.floor((Math.random() * 6) + 1);
let playerD2= Math.floor((Math.random() * 6) + 1);
let computerD1= Math.floor((Math.random() * 6) + 1);
let computerD2= Math.floor((Math.random() * 6) + 1);


$(playerDice1).text(playerD1);
$(playerDice2).text(playerD2);
$(computerDice1).text(computerD1);
$(computerDice2).text(computerD2);


});