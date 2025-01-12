const readline = require("readline");

// Game choices and scores
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Utility function to get a random computer choice
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to determine the round winner
const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) return "tie";
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        playerScore++;
        return "player";
    }
    computerScore++;
    return "computer";
};

// Function to display scores and the overall winner
const displayResults = (totalRounds) => {
    console.log("\nFinal Results:");
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("🏆 You are the overall winner!");
    } else if (computerScore > playerScore) {
        console.log("💻 Computer is the overall winner!");
    } else {
        console.log("It's a tie overall!");
    }
    askToPlayAgain();
};

// Function to play one round
const playRound = (roundsLeft, totalRounds) => {
    if (roundsLeft === 0) {
        displayResults(totalRounds);
        return;
    }

    rl.question("Choose rock, paper, or scissors: ", (playerChoice) => {
        playerChoice = playerChoice.toLowerCase();
        if (!choices.includes(playerChoice)) {
            console.log("Invalid choice. Please choose rock, paper, or scissors.");
            playRound(roundsLeft, totalRounds);
            return;
        }

        const computerChoice = getComputerChoice();
        console.log(`You chose: ${playerChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        const winner = determineWinner(playerChoice, computerChoice);
        if (winner === "player") {
            console.log("You win this round! 🎉");
        } else if (winner === "computer") {
            console.log("Computer wins this round! 😔");
        } else {
            console.log("This round is a tie! 🤝");
        }

        console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}\n`);
        playRound(roundsLeft - 1, totalRounds);
    });
};

// Function to start the game
const startGame = () => {
    rl.question("How many rounds would you like to play? ", (input) => {
        const totalRounds = parseInt(input);
        if (isNaN(totalRounds) || totalRounds <= 0) {
            console.log("Invalid number of rounds. Please enter a positive number.");
            startGame();
        } else {
            playerScore = 0; // Reset scores
            computerScore = 0;
            console.log(`Starting a game of ${totalRounds} rounds...\n`);
            playRound(totalRounds, totalRounds);
        }
    });
};

// Function to ask if the player wants to play again
const askToPlayAgain = () => {
    rl.question("\nDo you want to play again? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
            startGame();
        } else {
            console.log("Thanks for playing! Goodbye!");
            rl.close();
        }
    });
};

// Start the game
startGame();
