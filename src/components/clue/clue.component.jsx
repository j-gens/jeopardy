import React from 'react';

import GuessForm from '../guess-form/guess-form.component';
import Answer from '../answer/answer.component';
import ClueTimer from '../clue-timer/clue-timer.component';
import './clue.styles';


class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 0,
      buzzed: false,
      displayForm: false,
      displayAnswer: false,
      isCorrect: false,
      guess: '',
      timesUp: false,
      hideTimer: false,
    }
    this.myRef = React.createRef();
  }

  // Add the keydown event listener and ensure appropriate div is in focus
  componentDidMount() {
    this.myRef.current.addEventListener('keydown', this.handleKeyDown);
    this.myRef.current.focus();
  }

  // Remove the event listener
  componentWillUnmount() {
    this.myRef.current.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const keyCode = event.keyCode;
    const { buzzed } = this.state;
    // Do nothing if a player has already buzzed in
    if (buzzed) return;
    // Player 1 presses 'z' key to buzz in (keyCode = 90)
    if (keyCode === 90) {
      this.setState({
        player: 1,
        buzzed: true,
        displayForm: true,
        hideTimer: true,
      });
    }
    // Player 2 presses '/' key to buzz in (keyCode = 191)
    if (keyCode === 191) {
      this.setState({
        player: 2,
        buzzed: true,
        displayForm: true,
        hideTimer: true,
      });
    }
  }

  checkAnswer = (guess) => {
    const { answer } = this.props;
    let correct = false;
    // Ignore case when checking player's guess to answer
    if (guess.toLowerCase() === answer.toLowerCase()) correct = true;
    this.setState({
      displayForm: false,
      displayAnswer: true,
      isCorrect: correct,
      guess,
    });
  }

  endTimer = () => this.setState({timesUp: true, buzzed: true});

  render() {
    const { player, displayForm, displayAnswer, guess, isCorrect, timesUp, hideTimer } = this.state;
    const { clue, answer, value, updateScore } = this.props;
    return (
      <div className='clue' tabIndex='0' ref={this.myRef} onKeyDown={this.handleKeyDown} >
        <div className='clue-text'>
          <h4>
            {clue}
          </h4>
        </div>
        <div>
          {
            hideTimer ?
            ' ' :
            (
              timesUp ?
              (
                <div className='timer'>
                  Time's Up!
                  <div className='appeal-button' onClick={() => updateScore(0, 1)}>
                    Continue
                  </div>
                </div>
              ) :
              (
                <ClueTimer endTimer={this.endTimer} />
              )
            )
          }
        </div>
        <div className='clue-answer'>
          {
            displayForm ?
            (
              <GuessForm player={player} checkAnswer={this.checkAnswer} />
            ) :
            ''
          }
          {
            displayAnswer ?
            (
              <Answer
                player={player}
                answer={answer}
                guess={guess}
                value={value}
                isCorrect={isCorrect}
                updateScore={updateScore}
              />
            ) :
            ''
          }
        </div>
      </div>
    );
  }
}


export default Clue;
