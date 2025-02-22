// create a function named 'getComputerChoice' that will randomly return one of 3 choices (rock, paper, or scissors)
// Use Math.random to get a number between 1 and 3
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  console.log('The random number is: ', randomNum);

  let computerChoice;

  if (randomNum === 1) {
    computerChoice = 'rock';
  } else if (randomNum === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  console.log("The computer's choice is: ", computerChoice);
  return computerChoice;
}
