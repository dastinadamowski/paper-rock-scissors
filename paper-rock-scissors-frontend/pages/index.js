import { useState } from "react";
import styles from '../styles/Home.module.css';

export default function Home() {
    const choices = ["rock", "paper", "scissors"];
    const [result, setResult] = useState("");
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [resultClass, setResultClass] = useState("");

    const playGame = (playerChoice) => {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let outcome = "";

        if (playerChoice === computerChoice) {
            outcome = "It's a tie!";
            setResultClass("tie");
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "rock")
        ) {
            outcome = "You win!";
            setPlayerScore(playerScore + 1);
            setResultClass("win");
        } else {
            outcome = "Computer wins!";
            setComputerScore(computerScore + 1);
            setResultClass("lose");
        }

        setResult(`You chose ${playerChoice}. Computer chose ${computerChoice}. ${outcome}`);
    };

    const resetGame = () => {
        setPlayerScore(0);
        setComputerScore(0);
        setResult("");
        setResultClass("");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Paper Rock Scissors</h1>
            <div className={styles.scores}>
                <p className={styles.score}>Player: {playerScore}</p>
                <p className={styles.score}>Computer: {computerScore}</p>
            </div>
            <p className={styles.instruction}>Make your choice:</p>
            <div className={styles.buttons}>
                {choices.map((choice) => (
                    <button
                        key={choice}
                        className={styles.button}
                        onClick={() => playGame(choice)}
                    >
                        {choice.charAt(0).toUpperCase() + choice.slice(1)}
                    </button>
                ))}
            </div>
            <p className={`${styles.result} ${styles[resultClass]}`}>{result}</p>
            <button className={styles.resetButton} onClick={resetGame}>
                Reset Game
            </button>
        </div>
    );
}
