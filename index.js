import chalk from 'chalk';
import readlineSync from 'readline-sync';


let score = 0;
let highScores = [{name:'Pranay', score:10, level:3},
                  {name:'Shailesh', score:9, level:2}];

const theme={level1:chalk.bold.bgGreen,
level2:chalk.bold.bgCyan,
level2:chalk.bold.bgYellow}

let userName = readlineSync.question(theme.level1('What is your name? '));

console.log('Welcome '+ userName+' to "DO U KNOW BHAGWAD GITA?"');

function play(question, answer){
  let userAnswer = readlineSync.question(question);

    if(userAnswer.toUpperCase()===answer.toUpperCase()){
      console.log('right!');
      score++;      
    }
    else
      console.log('wrong!');
    if(score===5){
      console.log('Congrats! You are now in level-2 ')
    }
    console.log('current score: ', score);
    console.log('---------------------------');
}

let questions = [
{question:'How many chapters ( अध्याय ) are there in the Gita? ', answer:'18' },
{question:'How many verses are there in the Bhagavad Gita? ', answer:'701'},
{question:'Who is the writer of the Bhagavad Gita? ', answer:'Vyasa'},
{question:'Which great Indian leader had called the Gita as his Spiritual Dictionary? ', answer:'Gandhiji'},
{question:'What is the language of the Gita? ', answer:'Sanskrit'},
{question:'Who was narrating the Gita to Dhritrashtra? ', answer:'Sanjay'},
{question:'How many years ago did Krishna give the sermons of the Gita? ', answer:'7000'},
{question:'What is the name of rhyming meter used in this song? ', answer:'Anustup'},
{question:'How many syllables does Anustup contain in each verse? ', answer:'32'},
{question:'Who is the speaker of Bhagavad Gita? ', answer:'Krishna'}]

for(let question of questions){
  play(question.question, question.answer);
}

console.log('Congrats, Your Final score is '+score);

console.log('Highest Scores till now: ')
for(let hscore of highScores){
  console.log(`${hscore.name}: ${hscore.score} `);
}