import React from 'react';
import update from 'immutability-helper';

import Board from './components/board/board.component.jsx';
import Welcome from './components/welcome/welcome.component.jsx';
import { getGameClues, generateCategoryIds, makeConsistentClueValues } from './utils/jservice.js';
import './app.styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDouble: false,
      board: [],
    }
  }

  generateGame = () => {
    const { isDouble } = this.state;
    const categories = generateCategoryIds();
    getGameClues(categories, (error, results) => {
      if (error) console.log('error getting clues: ', error);
      makeConsistentClueValues(results, isDouble, (board) => {
        this.setState({ board }, () => console.log(board));
      });
    });
  }

  // Removes a clue from display on the board after it is selected
  // Takes categoryIndex (catI) and clueIndex (clueI)
  updateClueDisplay = (catI, clueI) => {
    const { board } = this.state;
    const newBoard = update(board, {[catI]: {[clueI]: {display: {$set: false}}}})
    this.setState({
      board: newBoard
    });
  }

  render() {
    const { board } = this.state;
    return (
      <div className='homepage'>
        <div className='page-title'>
          <h1>JEOPARDY</h1>
        </div>
        <div className='game'>
          {
            board.length > 0 ?
              <Board
                board={board}
                updateClueDisplay={this.updateClueDisplay}
              /> :
              <Welcome generateGame={this.generateGame} />
          }
        </div>
        <div className='footnote'>
          <p>
            This is a fan-created version of Jeopardy as an homage to the game and the late, great Alex Trebek.
          </p>
          <p>
            The Jeopardy! game show and all elements thereof, including but not limited to copyright and trademark thereto, are the property of Jeopardy Productions, Inc. and are protected under law. This website is not affiliated with, sponsored by, or operated by Jeopardy Productions, Inc.
          </p>
        </div>
      </div>
    );
  }
}


export default App;
