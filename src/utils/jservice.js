import axios from 'axios';


// Generate 6 random category IDs to query jService API for clues
export const generateCategoryIds = () => {
  const categories = [];
  for (let i = 0; i < 6; i++) {
    categories.push(Math.floor(Math.random() * 18000 + 1));
  }
  return categories;
}

// Request game clues for given categories from jService API
export const getGameClues = (categories, callback) => {
  const requestedClues = [];
  // Request clues for each category, limit to first 5 clues for each
  categories.forEach((category) => {
    requestedClues.push(
      axios.get(`http://jservice.io/api/clues?category=${category}`)
        .then((clues) => clues.data.slice(0, 5)));
  });
  // Wait for all requests to resolve
  Promise.all(requestedClues)
    .then((clues) => callback(null, clues))
    .catch((error) => callback(error));
}

// Process clue dollar amount to match single/double Jeopardy values
// Also add property to initially display each clue on the board
export const makeConsistentClueValues = (categories, isDouble, callback) => {
  // Determine if single or double Jeopardy round
  let values = [100, 200, 300, 400, 500];
  if (isDouble) values = [200, 400, 600, 800, 1000];
  // Iterate through all the clues to update values as needed
  categories.forEach((category) => {
    category.forEach((clue, index) => {
      clue.value = values[index];
      clue.display = true;
    });
  });
  callback(categories);
}
