import React from 'react';

import Clue from '../clue/clue.component.jsx';
import Category from '../category/category.component.jsx';
import Score from '../score/score.component.jsx';
import './board.styles.css';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: 0,
      two: 0,
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

  // update a player's score && remove Clue component from view
  updateScore = (value, player) => {
    const { scores } = this.state;
    const updatedScore = this.state[player] + value;
    this.setState({
      [player]: updatedScore,
      display: false,
    });
  }

  render() {
    const { board, updateClueDisplay } = this.props;
    const { one, two, display, currentClue, currentAnswer, currentValue } = this.state;
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
          <Score score={one} key={1} />
          <Score score={two} key={2} />
        </div>
      </div>
    );
  }
}


export default Board;
