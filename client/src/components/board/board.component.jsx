import React from 'react';

import Category from '../category/category.component.jsx';
import Score from '../score/score.component.jsx';
import './board.styles.css';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {name: 'Player 1', score: 0},
        {name: 'Player 2', score: 0},
        {name: 'Player 3', score: 0},
      ],
    };
  }

  render() {
    const { board } = this.props;
    const { players } = this.state;
    return (
      <div className='gamespace'>
        <div className='board'>
          {
            board.map((category, index) =>
              <Category category={category} key={index} />
            )
          }
        </div>
        <div className='scoreboard'>
          {
            players.map((player, index) =>
              <Score player={player} key={index} />
            )
          }
        </div>
      </div>
    );
  }
}


export default Board;
