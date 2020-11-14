import React from 'react';

import './welcome.styles.css';


const Welcome = ({ generateGame, joinGame }) => (
  <div className='welcome'>
    <div className='welcome--message'>
      Welcome to Jeopardy!  Choose an option below:
    </div>
    <div className='welcome--options'>
      <div className='welcome--option' onClick={generateGame}>
        <h3>
          Start New Game
        </h3>
      </div>
      <div className='welcome--option' onClick={joinGame}>
        <h3>
          Join Current Game
        </h3>
      </div>
    </div>
  </div>
);



export default Welcome;
