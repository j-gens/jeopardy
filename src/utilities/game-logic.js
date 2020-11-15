// Generate 6 random category IDs to query jService API for clues
export const generateCategoryIds = () => {
  const categories = [];
  for (let i = 0; i < 6; i++) {
    categories.push(Math.floor(Math.random() * 18000 + 1));
  }
  return categories;
}

// Process clue dollar amount to match single/double Jeopardy values
export const makeConsistentClueValues = (categories, isDouble, callback) => {
  // Determine if single or double Jeopardy round
  let values = [100, 200, 300, 400, 500];
  if (isDouble) values = [200, 400, 600, 800, 1000];
  // Iterate through all the clues to update values as needed
  categories.forEach((category) => {
    category.forEach((clue, index) => {
      clue.value = values[index];
    });
  });
  callback(categories);
}
