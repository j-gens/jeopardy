import React from 'react';

import './score.styles.css';


class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Enter Name'
    }
  }

  changeName = () => {
    let name = prompt('Please Enter Name:', "Player");
    if (name.length > 0) this.setState({ name })
  }

  render() {
    const { score } = this.props;
    const { name } = this.state;
    return (
      <div className='player'>
        <div className='player-score'>
          <h4>
          {score < 0 ? '-' : ''} ${Math.abs(score)}
          </h4>
        </div>
        <div className='player-name' onClick={this.changeName}>
          {name}
        </div>
      </div>
    );
  }
}


export default Score;
