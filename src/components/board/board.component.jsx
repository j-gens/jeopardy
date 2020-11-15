import React from 'react';

import Category from '../category/category.component.jsx';
import Score from '../score/score.component.jsx';
import './board.styles.css';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: []
    };
  }

  componentDidMount() {
    const { players } = this.props;
    let scores = new Array(players).fill(0);
    this.setState({ scores });
  }

  render() {
    const { board } = this.props;
    const { scores } = this.state;
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
            scores.map((score, index) =>
              <Score score={score} key={index} />
            )
          }
        </div>
      </div>
    );
  }
}


export default Board;
