'use strict';

var userPoints = 0;
//Name Question
var userName = prompt('Hello user, before we begin, what is your name?');
console.log('User\'s name is ' + userName + '.');
//question 1
var usersColorGuess = prompt('Hello ' + userName + ', is my favorite color green?');
usersColorGuess = usersColorGuess.toLowerCase();
if(usersColorGuess === 'no' || usersColorGuess === 'n') {
  alert('Correct! My favorite color is in fact blue.');
  userPoints++;
  console.log(userName + ' guessed my favorite color correctly and now has ' + userPoints + ' points.');
} else {
  alert('Sorry, my but my favorite color is blue! Not green.');
  console.log(userName + ' guessed my favorite color incorrectly and now has ' + userPoints + ' points.');
}
//question 2
var favFoodGuess = prompt('Is my favorite food yellow curry?');
favFoodGuess = favFoodGuess.toLowerCase();
if(favFoodGuess === 'yes' || favFoodGuess === 'y') {
  alert('Nice, not many people know that one!');
  userPoints++;
  console.log(userName + ' guessed my favorite food correctly and now has ' + userPoints + ' points.');
} else {
  alert('Sorry, but it actually is yellow curry!');
  console.log(userName + ' guessed my favorite food incorrectly and now has ' + userPoints + ' points.');
}
//question 3
var consoleGuess = prompt('Time for the third question ' + userName + '! Is my favorite gaming console the PS Vita?');
consoleGuess = consoleGuess.toLowerCase();
if(consoleGuess === 'no' || consoleGuess === 'n') {
  alert('You got that one right! I belive that you can\'t beat the processing power and controlls of a PC.');
  userPoints++;
  console.log(userName + ' guessed my favorite gaming console correctly and now has ' + userPoints + ' points.');
} else {
  alert('Nope, I prefer the PC as a gaming device. Sure its more expensive, but I think the increase in quality is worth it.');
  console.log(userName + ' guessed my favorite gaming console incorrectly and now has ' + userPoints + ' points.');
}
//question 4
var favDrinkGuess = prompt('Question four time! Is my favorite drink coffee?');
favDrinkGuess = favDrinkGuess.toLowerCase();
if(favDrinkGuess === 'no' || favDrinkGuess === 'n') {
  alert('Good job! Its really chai tea.');
  userPoints++;
  console.log(userName + ' guessed my favorite drink correctly and now has ' + userPoints + ' points.');
} else {
  alert('Sorry, my favotie drink is chai tea, not ' + favDrinkGuess + '.');
  console.log(userName + ' guessed my favorite drink incorrectly and now has ' + userPoints + ' points.');
}
//question 5
var gameGuess = prompt('Do I play the miniatures game \"Warhammer: Age of Sigmar\"');
gameGuess = gameGuess.toLowerCase();
if(gameGuess === 'no' || gameGuess === 'n') {
  alert('You got that right. I play the \'mostly\' sci-fi version of the game called \"Warhammer: 40,000\"');
  userPoints++;
  console.log(userName + ' guessed my miniature game correctly and now has ' + userPoints + ' points.')
} else {
  alert('Nope, I play the \'mostly\' sci-fi version of the game \"Warhammer: 40,000\"');
  console.log(userName + ' guessed my miniature game incorrectly and now has ' + userPoints + ' points.')
}
//Result 0
if(userPoints === 0) {
  alert('what?! You didn\'t get a single one right? You really need to catch up on your Jacob lore.');
}
//Result 1
if(userPoints === 1) {
  alert('Well, at least you got one right...');
}
//Result 2
if(userPoints === 2) {
  alert('You did ok, but you have much to learn.');
}
//Result 3
if(userPoints === 3) {
  alert('Nice! you know me as some of my relatives');
}
//Result 4
if(userPoints === 4) {
  alert('Only one wrong, that\'s something to be proud of');
}
//Result 5
if(userPoints === 5) {
  alert('Woot! You got all the questions right!');
}
