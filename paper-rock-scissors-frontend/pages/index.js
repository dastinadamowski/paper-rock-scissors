import React, { useState } from "react";
import Link from "next/link";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export default function Home() {
  // Fetch game results from Convex
  const gameResults = useQuery(api.GamesData.getResults);

  // Mutation to log a new game result
  const logResult = useMutation(api.GamesData.logResult);

  // State for the scoreboard
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [ties, setTies] = useState(0);

  // Handle logging a game result with dynamic gameplay
  const handleLogResult = (playerChoice) => {
    const choices = ["rock", "paper", "scissors"]; // Possible choices
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Random computer choice

    // Determine the outcome
    let outcome = "";
    if (playerChoice === computerChoice) {
      outcome = "It's a tie!";
      setTies((prev) => prev + 1); // Increment ties
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      outcome = "You win!";
      setPlayerScore((prev) => prev + 1); // Increment player score
    } else {
      outcome = "Computer wins!";
      setComputerScore((prev) => prev + 1); // Increment computer score
    }

    // Log the game result to Convex
    logResult({ playerChoice, computerChoice, outcome });
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Paper Rock Scissors</h1>
      <div className="flex justify-center gap-4 mb-6">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={() => handleLogResult("rock")}
        >
          Rock
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
          onClick={() => handleLogResult("paper")}
        >
          Paper
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          onClick={() => handleLogResult("scissors")}
        >
          Scissors
        </button>
      </div>
      <div className="bg-gray-100 p-4 rounded shadow-md w-1/2 mx-auto text-center my-4">
        <h2 className="text-lg font-bold">Scoreboard</h2>
        <p>Player: {playerScore}</p>
        <p>Computer: {computerScore}</p>
        <p>Ties: {ties}</p>
      </div>
      <h2 className="text-xl font-bold text-center my-4">Game Results</h2>
      <ul className="list-disc mx-auto w-1/2">
        {gameResults?.map(({ _id, playerChoice, computerChoice, outcome }) => (
          <li key={_id} className="my-2">
            {playerChoice} vs {computerChoice} - {outcome}
          </li>
        ))}
      </ul>
      <div className="text-center mt-6">
        <Link href="/rules" className="text-blue-600 underline">
          View Game Rules
        </Link>
      </div>
    </main>
  );
}
