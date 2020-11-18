import React from 'react';

import './guess-form.styles';


class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
    }
  }

  handleChange = (event) => this.setState({guess: event.target.value});

  handleSubmit = (event) => {
    event.preventDefault();

    const { guess } = this.state;
    const { checkAnswer } = this.props;
    checkAnswer(guess);

  }

  render() {
    const { guess } = this.state;
    const { player } = this.props;
    return (
      <form className='guess-form' onSubmit={this.handleSubmit}>
        <label htmlFor='guess'>
          <h4>
            Player {player}! Who/What/When/Where is....
          </h4>
        </label>
        <input
          type='text'
          name='guess'
          id='guess'
          value={guess}
          onChange={this.handleChange}
        />
        <button type='submit'>
          <h3>
            Submit
          </h3>
        </button>
      </form>
    );
  }
}


export default GuessForm;
