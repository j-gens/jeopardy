const express = require('express');
const path = require('path');
const jservice = require('./jservice.js');


const app = express();

app.use(express.static('client/dist'));

// path for generating a new game
app.get('/api/newgame/', (req, res) => {
  jservice.getGameCategories((error, categories) => {
    if (error) res.sendStatus(404);
    jservice.getGameClues(categories, (error, clues) => {
      if (error) res.sendStatus(404);
      console.log(req.query.double);
      jservice.makeConsistentClueValues(clues, req.query.double, (result) => {
        res.send(result);
      })
    });
  })
})


module.exports = app;
