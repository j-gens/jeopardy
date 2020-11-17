# Fun With JEOPARDY!
## Quiz Platform App

* [Overview](https://github.com/j-gens/jeopardy#overview)
  * [Future Goals](https://github.com/j-gens/jeopardy#future-goals)
* [Technologies](https://github.com/j-gens/jeopardy#technologies)
* [Getting Started](https://github.com/j-gens/jeopardy#getting-started)
  * [Installing](https://github.com/j-gens/jeopardy#installing)
* [Game Instructions](https://github.com/j-gens/jeopardy#game-instructions)
* [License](https://github.com/j-gens/jeopardy#license)


## Overview

Fun With JEOPARDY! is a same-screen multiplayer version of the popular television trivia show Jeopardy!  It is currently programmed for two contestants (as opposed to the standard three contestants on the TV show) due to the nature of the players needing to share the same keyboard.

Special thanks to the fans at the J! Archive and the jService API maintained by [@sottenad](https://github.com/sottenad).

#### Future Goals

Currently the app represents my minimum viable product.  However, there are many features I hope to build as part of the future goals for the game, including:

* Creating a multiplayer version that can be played online (not same-screen).  This would allow for the introduction of the following features:
  * Daily Double (option to submit wager and response would only be available to player that buzzed in for the clue)
  * Final Jeopardy! (players would only see their own wager and response before submission)
  * Three players would be more feasible without requiring three people to crowd around the same screen
* Create player profiles and allow saving personal achievements (ex: highest score at end of game, # of clues seen, # of clues correct/incorrect/unanswered)

## Technologies

* JavaScript
* React
* Axios
* Webpack
* Babel
* HTML5 / CSS
* Node.js / Express

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Installing

1. Clone the repository onto your local machine
```
$ git clone https://github.com/j-gens/jeopardy.git
```
2. Change directories into the jeopardy root directory
```
cd jeopardy
```
3. Install the dependencies in a local node_modules folder
```
npm install
```
4. Run the start command which will assemble the bundle within the dist folder and start the server on your local machine
```
npm start
```
7. View in browser by going to [http://localhost:3000](http://localhost:3000)

## Game Instructions

After launching the game (see instructions above for assistance) you will be prompted to "Start New Game."  Click to begin the fun!

The board will generate with the first round of Jeopardy! categories and values displayed.  Click on the desired value amount to see the corresponding clue (presented in the form of an answer).  The "answer" will be displayed with a 30-second timer (countdown begins immediately).

While the timer is active, players may buzz in to give a response.  Player 1 uses the 'z' key and Player 2 uses the '/' key.  A reminder is posted under each player's score at the bottom of the screen.

If a player buzzes in, they will be prompted to enter their response into the input field that will pop up.  The response is assumed to be in the form of a question, and players will not have to type out the starting phrase (ex: "what is..." or "who are...").

After the player submits the response they will be notified if it is correct/incorrect.  If the response is correct, the clue value will be added to their score and gameplay can resume.

If the player's response was incorrect, they will be given a chance to compare both their response and the correct response.  The player will be given a chance to 'Appeal?' if their response was correct but contained a typo (and thus was wrongly flagged as incorrect).  Their opponent should agree to the appeal.

Incorrect responses will have the clue value deducted from a player's score.  Correct (and appealed) responses will have the clue value added to a player's score.  If time runs out before either player buzzes in, scores will remain unchanged and the game will continue.

When the board is cleared at the end of the first round, Double Jeopardy! will begin.  The board will automatically repopulate with new categories (and clues with corresponding double values).

At the end of Double Jeopardy! the player with the highest score will be declared the winner.  No winner is declared in the case of a tie.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/j-gens/jeopardy/blob/master/LICENSE) file for details.

_This is a fan-created version of Jeopardy! as an homage to the game and the late, great Alex Trebek._

_The Jeopardy! game show and all elements thereof, including but not limited to copyright and trademark thereto, are the property of Jeopardy Productions, Inc. and are protected under law. This website is not affiliated with, sponsored by, or operated by Jeopardy Productions, Inc._
