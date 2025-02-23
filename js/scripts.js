function getComputerChoice() {
  // Generate a random number and assign rock, paper, or scissors
  let randomNum = Math.floor(Math.random() * 3) + 1;
  return randomNum === 1 ? 'rock' : randomNum === 2 ? 'paper' : 'scissors';
}

function getHumanChoice(round) {
  // Prompt user for choice, showing the correct round number
  let humanChoice = prompt(
    `Let's play Rock, Paper, Scissors! Best of 5 rounds.\nRound ${
      round + 1
    }:\nChoose rock, paper, or scissors:`
  );

  if (!humanChoice) return null; // Handle user canceling

  humanChoice = humanChoice.toLowerCase(); // Convert input to lowercase

  // Validate input and recursively prompt again if invalid
  if (!['rock', 'paper', 'scissors'].includes(humanChoice)) {
    alert(`Invalid choice. Please enter rock, paper, or scissors.`);
    return getHumanChoice(round);
  }

  return humanChoice;
}

// Track scores globally
let humanScore = 0;
let computerScore = 0;

function updateGameScore() {
  // Show current scores after each round
  alert(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
  // Determine winner based on standard Rock Paper Scissors rules
  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    alert(`You won! ${humanChoice} beats ${computerChoice}.`);
    humanScore++; // Increase human score
  } else if (humanChoice === computerChoice) {
    alert(`It's a tie! You both chose ${humanChoice}.`);
  } else {
    alert(`You lost! ${computerChoice} beats ${humanChoice}.`);
    computerScore++; // Increase computer score
  }
  updateGameScore(); // Display updated scores
}

function playGame() {
  // Loop through 5 rounds
  for (let round = 0; round < 5; round++) {
    const humanSelection = getHumanChoice(round);
    if (!humanSelection) {
      alert('Game canceled by user.'); // Stop if user cancels
      return;
    }

    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Display final results
  if (humanScore > computerScore) {
    alert(`🎉 You won the game! Final Score: ${humanScore} - ${computerScore}`);
  } else if (humanScore < computerScore) {
    alert(
      `😢 You lost the game. Final Score: ${computerScore} - ${humanScore}`
    );
  } else {
    alert(`🤝 It's a tie! Final Score: ${humanScore} - ${computerScore}`);
  }
}

// Start the game
playGame();
