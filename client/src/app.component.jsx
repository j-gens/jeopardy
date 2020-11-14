import React from 'react';
import axios from 'axios';

import Board from './components/board/board.component.jsx';
import Welcome from './components/welcome/welcome.component.jsx';
import './app.styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: '',
      board: [],
    }
  }

  generateGame = () => {
    console.log('hello');

    axios.get('/api/newgame/')
      .then((response) => {
        this.setState({
          board: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { board } = this.state;
    return (
      <>
        <div className='app'>
          {
            board.length > 0 ?
              <Board board={board} /> :
              <Welcome generateGame={this.generateGame} />
          }
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
