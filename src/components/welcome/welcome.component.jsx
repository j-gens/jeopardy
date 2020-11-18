import React from 'react';

import './welcome.styles';


const Welcome = ({ generateGame, joinGame }) => (
  <div className='welcome'>
    <div className='welcome--message'>
      Welcome to Jeopardy!  Are you ready to have some fun?
    </div>
      <div className='welcome--button' onClick={generateGame}>
        <h3>
          Start New Game
        </h3>
      </div>
  </div>
);



export default Welcome;
