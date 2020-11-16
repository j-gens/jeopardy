import React from 'react';

import './answer.styles.css';


class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appealMade: false,
    }
  }

  // If incorrect, player can appeal answer (mispelled, abbreviated, etc)
  handleAppeal = () => this.setState({ appealMade: true });

  submitScore = (event) => {
    const { target: { innerText } } = event;
    const { isCorrect, value, player, updateScore } = this.props;
    let score = value;
    let reverse = false;
    // If player appeal was approved, reverse score
    if (innerText === 'Yes') reverse = true;
    // If player wasn't correct & didn't win appeal, subtract score from their total

    console.log('event', event)
    console.log('to reverse, true true', !isCorrect, reverse);

    if (!isCorrect && !reverse) score *= -1;
    // Submit score and player to Board component
    const writtenPlayer = (player === 1 ? 'one' : 'two');
    updateScore(score, writtenPlayer);
  }

  render() {
    const {player, answer, guess, isCorrect } = this.props;
    const { appealMade } = this.state;
    return (
      <div className='answer'>
        <div className='answer--phrase'>
          <h4>
            { isCorrect ? 'That\'s correct' : 'No, sorry' } Player {player}
          </h4>
        </div>
        <div className='answer--compare'>
          <h2>
            Correct Answer: {answer}
          </h2>
          <h2>
            Player {player}'s Answer: {guess}
          </h2>
        </div>
        <div className='answer--appeal'>
          <div className='appeal-buttons'>
            <div className='appeal-button' onClick={this.submitScore}>
              Continue
            </div>
            {
              isCorrect ?
              ' ' :
              (
                <div className='appeal-button' onClick={this.handleAppeal}>
                  Appeal?
                </div>
              )
            }
          </div>
          {
            appealMade ?
            (
              <div className='appeal-check'>
                <h2>
                  Does your opponent agree that your answer is correct?
                </h2>
                <div className='appeal-buttons'>
                  <div className='appeal-button' onClick={this.submitScore}>
                    Yes
                  </div>
                  <div className='appeal-button' onClick={this.submitScore}>
                    No
                  </div>
                </div>
              </div>
            ) :
            ''
          }
        </div>
      </div>
    );
  }
}


export default Answer;
