import React from 'react';

import Board from './components/board/board.component.jsx';
import Welcome from './components/welcome/welcome.component.jsx';
import './app.styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: '',
    }
  }

  render() {
    const { gameId } = this.state;
    return (
      <>
        <div className='app'>
          {gameId.length > 0 ? <Board /> : <Welcome />}
        </div>
        <footer>
          <span>
            This is a fan-created version of Jeopardy as an homage to the game and the late, great Alex Trebek.
          </span>
          <span>
            The Jeopardy! game show and all elements thereof, including but not limited to copyright and trademark thereto, are the property of Jeopardy Productions, Inc. and are protected under law. This website is not affiliated with, sponsored by, or operated by Jeopardy Productions, Inc.
          </span>
        </footer>
      </>
    );
  }
}


export default App;
