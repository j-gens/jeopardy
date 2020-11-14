import React from 'react';

import './score.styles.css';


const Score = ({ player: { name, score } }) => (
  <div className='player'>
    <div className='player-score'>
      <h4>
       {score < 0 ? '-' : ''} ${Math.abs(score)}
      </h4>
    </div>
    <div className='player-name'>
      {name}
    </div>
  </div>
);


export default Score;
