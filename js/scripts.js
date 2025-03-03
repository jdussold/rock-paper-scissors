let playerScore = 0;
let computerScore = 0;
let round = 1;
let message = document.querySelector('#prompts');

// Get computer choice:
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let choices = ['rock', 'paper', 'scissors'];
  let computerChoice = choices[randomNum];

  console.log(`Computer Choice: `, computerChoice);
  return computerChoice;
}

// Play a round
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    round++;
    playerScore++;
    message.innerText = `🎉 You won! ${capitalize(
      playerChoice
    )} beats ${capitalize(computerChoice)}.
    \nCurrent score: ${playerScore} - ${computerScore}`;
  } else if (playerChoice === computerChoice) {
    round++;
    message.innerText = `🟰 Tie! ${capitalize(
      playerChoice
    )} is the same as ${capitalize(computerChoice)}.
    \nCurrent score: ${playerScore} - ${computerScore}`;
  } else {
    round++;
    computerScore++;
    message.innerText = `😞 You lost. ${capitalize(
      computerChoice
    )} beats ${capitalize(playerChoice)}.
    \nCurrent score: ${playerScore} - ${computerScore}`;
  }

  // Check if game is over after 5 rounds
  if (round > 5) {
    displayFinalResult();
  }
}

// Display final result after 5 rounds
function displayFinalResult() {
  if (playerScore > computerScore) {
    message.innerText = `🎉 Congratulations! You won!\nFinal Score: ${playerScore} - ${computerScore}`;
  } else if (playerScore < computerScore) {
    message.innerText = `😞 Sorry, you lost.\nFinal Score: ${playerScore} - ${computerScore}`;
  } else {
    message.innerText = `🟰 Tie game.\nFinal Score: ${playerScore} - ${computerScore}`;
  }

  // Reset game after displaying the final message
  setTimeout(resetGame, 3000);
}

// Reset game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  message.innerText = 'Please make a selection to start a new game!';
}

// Capitalize function for formatting
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Add event listeners to buttons
document
  .querySelector('#rock-btn')
  .addEventListener('click', () => playRound('rock'));
document
  .querySelector('#paper-btn')
  .addEventListener('click', () => playRound('paper'));
document
  .querySelector('#scissors-btn')
  .addEventListener('click', () => playRound('scissors'));
