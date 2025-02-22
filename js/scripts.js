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

// create a function named 'getHumanChoice" that will return one of the 3 valide choices ("rock", "paper", or "scissors") via user input.
function getHumanChoice() {
  let humanChoice = prompt(
    `Enter your choice of "rock", "paper", or "scissors" below:`
  );

  if (humanChoice != null) {
    humanChoice = humanChoice.toLowerCase();
  } else {
    alert(`User cancelled the prompt`);
    return;
  }

  console.log(humanChoice);

  if (
    humanChoice != 'rock' &&
    humanChoice != 'paper' &&
    humanChoice != 'scissors'
  ) {
    alert(
      `Please enter a valid choice of either "rock", "paper", or "scissors"`
    );
    getHumanChoice();
  } else {
    alert(`Thank you.  You have chosen "${humanChoice}"`);
  }
}
