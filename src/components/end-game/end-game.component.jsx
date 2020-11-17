import React from 'react';

import './end-game.styles.css';


const EndGame = ({ winner }) => (
  <div className='end-game'>
    {
      winner > 0 ?
      (
        <h1>Congratulations Player {winner} on your win!</h1>
      ) :
      (
        <h1>The round ended in a tie!  Good job to you both!</h1>
      )
    }
  </div>
);


export default EndGame;
