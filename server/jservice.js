const axios = require('axios');


// Request 6 category IDs from jService API
const getGameCategories = (callback) => {
  axios.get('http://jservice.io/api/categories?count=6')
    .then((categories) => {
      const categoryIds = [];
      // Add only category IDs to categoryIds list
      categories.data.forEach((category) => {
        categoryIds.push(category.id);
      });
      callback(null, categoryIds);
    })
    .catch((error) => callback(error));
}

// Request game clues for given categories from jService API
const getGameClues = (categories, callback) => {
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


module.exports = {
  getGameCategories,
  getGameClues,
}
