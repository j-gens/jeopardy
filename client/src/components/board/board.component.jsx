import React from 'react';

import Category from '../category/category.component.jsx';
import Score from '../score/score.component.jsx';
import './board.styles.css';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { board } = this.props;
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
          scoreboard
        </div>
      </div>
    );
  }
}


export default Board;
