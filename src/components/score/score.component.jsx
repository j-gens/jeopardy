import React from 'react';

import './score.styles';


const Score = ({ score, player }) => (
  <div className='player'>
    <div className='player-score'>
      <h4>
      {score < 0 ? '-' : ''} ${Math.abs(score)}
      </h4>
    </div>
    <div className='player-name'>
      Player {player + 1}
    </div>
    <div className='player-instructions'>
      {
        player === 0 ?
        'Buzz in with \'z\' key!' :
        'Buzz in with \'/\' key!'
      }
    </div>
  </div>
);


export default Score;
