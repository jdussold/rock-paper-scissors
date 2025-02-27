let playerScore = 0;
let computerScore = 0;
let round = 1;

// Get player choice:
function getPlayerChoice() {
  let playerChoice = prompt(
    `Round ${round} of 5.\nEnter Rock, Paper, or Scissors: `
  );

  if (!playerChoice) {
    alert(`Player canceled the game.`);
    return;
  }

  playerChoice = playerChoice.toLowerCase();

  if (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
    alert(`Invalid choice.  Please enter Rock, Paper, or Scissors.`);
    return getPlayerChoice();
  }
  console.log(`Player Choice: `, playerChoice);
  return playerChoice;
}

// Get computer choice:
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  let computerChoice =
    randomNum === 1 ? 'rock' : randomNum === 2 ? 'paper' : 'scissors';

  console.log(`Random Number: `, randomNum);
  console.log(`Computer Choice: `, computerChoice);
  return computerChoice;
}

// Play a round
function playRound() {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    round++;
    playerScore++;
    alert(
      `🎉 You won! ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
      } beats ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }\nThe current score is: ${playerScore} - ${computerScore}`
    );
  } else if (playerChoice === computerChoice) {
    round++;
    alert(
      `🟰 Tie game. ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
      } is the same as ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }\nThe current score is still: ${playerScore} - ${computerScore}`
    );
  } else {
    round++;
    computerScore++;
    alert(
      `😞 You lost. ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
      }\nThe current score is: ${playerScore} - ${computerScore}`
    );
  }
}

// Play whole game (5 rounds)
function playGame() {
  while (round <= 5) {
    playRound();
  }
  if (playerScore > computerScore) {
    alert(
      `🎉 Congratulations! You won!\nFinal Score: ${playerScore} - ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    alert(
      `😞 Sorry, you lost.\nFinal Score: ${playerScore} - ${computerScore}`
    );
  } else {
    alert(`🟰 Tie game.\nFinal score: ${playerScore} - ${computerScore}`);
  }
}
