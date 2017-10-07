'use strict';

var userPoints = 0;
//Name Question
var userName = prompt('Hello user, before we begin, what is your name?');
console.log('User\'s name is ' + userName + '.');
// //question 1
// function question1() {
//   var usersColorGuess = prompt('Hello ' + userName + ', is my favorite color green?');
//   usersColorGuess = usersColorGuess.toLowerCase();
//   if(usersColorGuess === 'no' || usersColorGuess === 'n') {
//     alert('Correct! My favorite color is in fact blue.');
//     userPoints++;
//     console.log(userName + ' guessed my favorite color correctly and now has ' + userPoints + ' points.');
//   } else {
//     alert('Sorry, my but my favorite color is blue! Not green.');
//     console.log(userName + ' guessed my favorite color incorrectly and now has ' + userPoints + ' points.');
//   }
// }
// question1();
// //question 2
// function question2() {
//   var favFoodGuess = prompt('Is my favorite food yellow curry?');
//   favFoodGuess = favFoodGuess.toLowerCase();
//   if(favFoodGuess === 'yes' || favFoodGuess === 'y') {
//     alert('Nice, not many people know that one!');
//     userPoints++;
//     console.log(userName + ' guessed my favorite food correctly and now has ' + userPoints + ' points.');
//   } else {
//     alert('Sorry, but it actually is yellow curry!');
//     console.log(userName + ' guessed my favorite food incorrectly and now has ' + userPoints + ' points.');
//   }
// }
// question2();
// //question 3
// function question3() {
//   var consoleGuess = prompt('Time for the third question ' + userName + '! Is my favorite gaming console the PS Vita?');
//   consoleGuess = consoleGuess.toLowerCase();
//   if(consoleGuess === 'no' || consoleGuess === 'n') {
//     alert('You got that one right! I belive that you can\'t beat the processing power and controlls of a PC.');
//     userPoints++;
//     console.log(userName + ' guessed my favorite gaming console correctly and now has ' + userPoints + ' points.');
//   } else {
//     alert('Nope, I prefer the PC as a gaming device. Sure its more expensive, but I think the increase in quality is worth it.');
//     console.log(userName + ' guessed my favorite gaming console incorrectly and now has ' + userPoints + ' points.');
//   }
// }
// question3();
// //question 4
// function question4() {
//   var favDrinkGuess = prompt('Question four time! Is my favorite drink coffee?');
//   favDrinkGuess = favDrinkGuess.toLowerCase();
//   if(favDrinkGuess === 'no' || favDrinkGuess === 'n') {
//     alert('Good job! Its really chai tea.');
//     userPoints++;
//     console.log(userName + ' guessed my favorite drink correctly and now has ' + userPoints + ' points.');
//   } else {
//     alert('Sorry, my favotie drink is chai tea, not ' + favDrinkGuess + '.');
//     console.log(userName + ' guessed my favorite drink incorrectly and now has ' + userPoints + ' points.');
//   }
// }
// question4();
// //question 5
// function question5() {
//   var gameGuess = prompt('Do I play the miniatures game "Warhammer: Age of Sigmar"');
//   gameGuess = gameGuess.toLowerCase();
//   if(gameGuess === 'no' || gameGuess === 'n') {
//     alert('You got that right. I play the \'mostly\' sci-fi version of the game called "Warhammer: 40,000"');
//     userPoints++;
//     console.log(userName + ' guessed my miniature game correctly and now has ' + userPoints + ' points.');
//   } else {
//     alert('Nope, I play the \'mostly\' sci-fi version of the game "Warhammer: 40,000"');
//     console.log(userName + ' guessed my miniature game incorrectly and now has ' + userPoints + ' points.');
//   }
// }
// question5();
// //question 6
// function question6() {
//   for(var guesses = 4; guesses > 0; guesses--) {
//     var numGuess = prompt('What is my favorite number? You have four guesses.');
//     numGuess = parseInt(numGuess);
//     if(numGuess < 12) {
//       alert('Sorry too low.');
//     } else if(numGuess === 12) {
//       alert('Good guess!');
//       userPoints++;
//       break;
//     } else {
//       alert('Sorry too high');
//     }
//   }
//   if(guesses === 0) {
//     alert('Sorry, you ran out of guesses. The correct number was 12');
//   }
// }
// question6();
//question 7
function question7() {
  var statesLived = ['oregon', 'utah'];
  var guesses2 = 6;
  while(guesses2 > 0) {
    var stateGuess = prompt('What is a state that I have lived in besides Washington?');
    stateGuess = stateGuess.toLowerCase();
    console.log(stateGuess);
    if(guesses2 === 0) {
      alert('Too bad. You\'re out of guesses');
      console.log(userName + ' didn\'t guess a state I\'ve lived in previously');
    }
    if((stateGuess === statesLived[0]) || (stateGuess === statesLived[1])) {
      alert('Correct! I\'ve lived in Oregon, Utah as well as Washington');
      guesses2 = 0;
      userPoints++;
      console.log(userName + ' guessed a state I lived in correctly');
    }else if(stateGuess !== statesLived[0] && stateGuess !== statesLived[1]) {
      guesses2--;
      alert('Sorry, but that isn\'t right, you have ' + guesses2 + ' guesses remaining.');
    }
  }
}
question7();
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
  alert('You did well, but you still have much to learn.');
}
//result 4
if(userPoints === 4) {
  alert('Nice! you know me as well as some of my relatives.');
}
//result 5
if(userPoints === 5) {
  alert('Nice one! 5/7 isn\'t bad');
}
//Result 6
if(userPoints === 6) {
  alert('Only one wrong, that\'s something to be proud of');
}
//Result 7
if(userPoints === 7) {
  alert('Woot! You got all the questions right!');
}
