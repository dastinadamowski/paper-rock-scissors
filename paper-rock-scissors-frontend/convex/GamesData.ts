import { query, mutation } from "./_generated/server";

// Query: Fetch game data
export const getResults = query(async ({ db }) => {
  return await db.query("GamesData").collect(); // Changed table name here
});

// Mutation: Add a new game result
export const logResult = mutation(async ({ db }, { playerChoice, computerChoice, outcome }) => {
  await db.insert("GamesData", { // Changed table name here
    playerChoice,
    computerChoice,
    outcome,
    createdAt: Date.now(),
  });
});
