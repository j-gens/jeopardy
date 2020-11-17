import React from 'react';
import update from 'immutability-helper';

import Clue from '../clue/clue.component.jsx';
import Category from '../category/category.component.jsx';
import Score from '../score/score.component.jsx';
import './board.styles.css';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [0, 0],
      currentClue: '',
      currentAnswer: '',
      currentValue: 0,
      display: false,
      clueCounter: 0,
    };
  }

  // Display the clicked clue and save current details
  // When clue counter reaches 30 we are on final clue of board
  displayClue = (clue, answer, value) => {
    const { clueCounter } = this.state;
    this.setState({
      currentClue: clue,
      currentAnswer: answer,
      currentValue: value,
      display: true,
      clueCounter: clueCounter + 1,
    })
  }

  // Update a player's score && remove Clue component from view
  updateScore = (value, player) => {
    const { scores, clueCounter } = this.state;
    const updatedScore = scores[player - 1] + value;
    const newScores = update(scores, {[player - 1]: {$set: updatedScore}})
    this.setState({
      display: false,
      scores: newScores
    }, () => this.checkIfDoubleJeopardy());
  }

  // Check if round of game has been completed
  checkIfDoubleJeopardy = () => {
    const { clueCounter, scores } = this.state;
    const { isDouble, generateGame, endGameSequence } = this.props;
    console.log('cluecounter', clueCounter)
    if (clueCounter === 30 && isDouble) {
      this.setState({clueCounter: 0}, generateGame);
    } else if (clueCounter === 30 && !isDouble) {
      endGameSequence(scores)
    }
  }

  render() {
    const { board, updateClueDisplay } = this.props;
    const { updateScore, scores, display, currentClue, currentAnswer, currentValue, clueCounter } = this.state;
    return (
      <div className='gamespace'>
        <div className='board'>
          {
            display ?
            <Clue
              clue={currentClue}
              answer={currentAnswer}
              value={currentValue}
              updateScore={this.updateScore}
              key={clueCounter}
            /> :
            board.map((category, index) =>
              <Category
                category={category}
                displayClue={this.displayClue}
                updateClueDisplay={updateClueDisplay}
                categoryIndex={index}
                key={index}
              />
            )
          }
        </div>
        <div className='scoreboard'>
          {
            scores.map((score, index) =>
              <Score score={score} player={index} key={index} />
            )
          }
        </div>
      </div>
    );
  }
}


export default Board;
