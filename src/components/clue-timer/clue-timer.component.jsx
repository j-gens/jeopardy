import React from 'react';

import './clue-timer.styles';


class ClueTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.decrementTimer(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  decrementTimer = () => {
    const { timer } = this.state;
    const { endTimer } = this.props
    if (timer === 0) {
      endTimer();
    } else {
      this.setState({timer: timer - 1});
    }
  }

  render() {
    const { timer, timesUp } = this.state;
    return (
      <div className='timer'>
        Time Remaining: {timer}
      </div>
    );
  }
}


export default ClueTimer;
