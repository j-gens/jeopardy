import React from 'react';

import './clue.styles.css';


class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 0,
      buzzed: false,
      guess: '',
    }
  }

  handleKeyDown = (event) => {
    const { buzzed } = this.state;
    const keyCode = event.keyCode;
    console.log('hello', keyCode);
    // Do nothing if someone has already buzzed in
    if (buzzed) return;
    // Player 1 presses 'z' key to buzz in (keyCode = 90)
    if (keyCode === 90) this.setState({ player: 1, buzzed: true });
    // Player 2 presses '/' key to buzz in (keyCode = 191)
    if (keyCode === 191) this.setState({ player: 2, buzzed: true });
  }

  handleChange = (event) => this.setState({guess: event.target.value})

  render() {
    const { player, buzzed, guess } = this.state;
    const { clue } = this.props;
    return (
      <div className='clue' onKeyDown={this.handleKeyDown} >
        <div className='clue-text'>
          <h4>
            {clue}
          </h4>
        </div>
        <div className='clue-timer'>
          timer here
        </div>
        <div className='clue-answer'>
          {
            buzzed ?
            (
              <form onSubmit={this.handleSubmit}>
                <label for='guess'>
                  Player {player}! Who/What/Where/When is....
                </label>
                <input
                  type='text'
                  name='guess'
                  id='guess'
                  value={guess}
                  onChange={this.handleChange}
                />
                <button type='submit'>
                  Submit
                </button>
              </form>
            ) :
            ''
          }
        </div>
      </div>
    );
  }
}


export default Clue;
