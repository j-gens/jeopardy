import React from 'react';

import GuessForm from '../guess-form/guess-form.component.jsx';
import Answer from '../answer/answer.component.jsx';
import './clue.styles.css';


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
    }
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.addEventListener('keydown', this.handleKeyDown);
    this.myRef.current.focus();
  }

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
      this.setState({ player: 1, buzzed: true, displayForm: true });
    }
    // Player 2 presses '/' key to buzz in (keyCode = 191)
    if (keyCode === 191) {
      this.setState({ player: 2, buzzed: true, displayForm: true });
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

  render() {
    const { player, displayForm, displayAnswer, guess, isCorrect } = this.state;
    const { clue, answer, value, updateScore } = this.props;
    return (
      <div className='clue' tabIndex='0' ref={this.myRef} onKeyDown={this.handleKeyDown} >
        <div className='clue-text'>
          <h4>
            {clue}
          </h4>
        </div>
        <div className='clue-timer'>
          - - - - - timer here - - - - -
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
