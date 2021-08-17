var readlineSync=require("readline-sync");
var userName=readlineSync.question("What's your Name? ");
console.log("Welcome "+userName+ " to DO YOU KNOW Abhishek?");
console.log("TYPE yes/no");
var options=readlineSync.question("");
if(options.toUpperCase()==="YES"){
    console.log("Oh!that's nice...Let's play a quick quiz:-)");
}else{
  console.log("It's ok! Let's know more about Abhishek by playing a quick quiz:-)");
}
var highScore=[
  {
    name:"Ashutosh",
    highScore:"5",
  },
  {
    name:"priyanshi",
    highScore:"4",
  },
];
var score=0;
function play(question,answer){
var userAnswer=readlineSync.question(question);
if(userAnswer.toUpperCase()===answer.toUpperCase())
{
  console.log("Right answer!");
score++;
}else{
  console.log("Wrong answer!");
}
console.log("Your current score-",score);
console.log("------------------------");
}
var questions=[
{
  question:"Where Abhishek currently live ? ",
  answer:"jaipur"
},
{
  question:"Does Abhishek loves programming? ",
  answer:"yes",
},
{
  question:"Which os Abhishek prefer Mac or PC? ",
  answer:"mac",
},
{
  question:"What does Abhishek prefers Coffee or Tea? ",
  answer:"Tea",
},
{
  question:"What does Abhishek prefers Winter or Summer? ",
  answer:"Winter",
},
];
for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
 if(score>=highScore[0].highScore){
   console.log("Wow That's great!you know Abhishek Better then " +highScore[0].name);
  console.log("CONGRATS!you created high score");
  console.log("Send me screen-shot to update your score as new high score");
 }
 else if(score>=highScore[1].highScore){
   console.log("Wow That's great!you know Abhishek Better then " +highScore[1].name);
  console.log("CONGRATS!you are on second position");
  console.log("Send me screen-shot to update your score ");
 }
 console.log("Thanks!");