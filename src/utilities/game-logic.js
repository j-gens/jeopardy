// Process clue dollar amount to match single/double Jeopardy values
export const makeConsistentClueValues = (categories, game, callback) => {
  // Determine if single or double Jeopardy round
  let values = [100, 200, 300, 400, 500];
  if (game === 'true') values = [200, 400, 600, 800, 1000];
  // Iterate through all the clues to update values as needed
  categories.forEach((category) => {
    category.forEach((clue, index) => {
      clue.value = values[index];
    });
  });
  callback(categories);
}
