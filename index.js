const rl = require("readline-sync");
const chalk = require("chalk");

const error = chalk.bold.redBright;
const success = chalk.bold.underline.green;
const orange = chalk.keyword('orange');

const log = console.log;

log(chalk.blueBright.bold("Hey There!"))

const userName = rl.question(chalk.redBright("What's your Name ? "));

log(orange.bold(`Hello ${userName}`), "\nLet's check how well you know Rahul Reddy");

const quesBank = [{
   question: "What's my favourite color? ",
  answer: "Blue"
},{
  question: "Which phone is rahul using currently ",
  answer: "One plus 6"
}, {
  question: "What is my fav food? ",
  answer: "Mandi"
}, {
  question: "What is rahul's favourite Superhero name? ",
  answer: "Thor"
}, {
  question: "What do rahul like..cars or bikes? ",
  answer: "Cars"
}, {
  question: "What is my favourite pass time ",
  answer: "Travel"
}, {
  question: "Is rahul a good or bad guy :) ",
  answer: "Good"
}]

var score = 0;
function play(quesBank) {
  var userAnswer = rl.question(chalk.red.bold(quesBank.question));

  if( userAnswer.toLowerCase() === quesBank.answer.toLowerCase()) {
    log(success("Yay! You are right"));
    score += 1;
  } else {
    log(error("oh no! You are wrong"));
    score = score - 1;
    if(score < 0) score = 0;
  }

  log(orange.bold.bgBlue("\nCurrent Score: ", score));
  log("\n----------------");
}

for(var i=0;i < quesBank.length; i++) {
  play(quesBank[i]);


if(i === quesBank.length -1) {
  log(chalk.bold.bgCyan.red("Your Final Score is:", score));
  log("\n Thanks for Playing..");
}
}