import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header.js';
import SetDificulty from './components/SetDifficulty.js';
import Board from './components/Board.js'
import Footer from './components/Footer.js'
import Won from './components/Won.js'


class App extends Component {
  state = {
    gameStarted: false,
    faq: false,
    won: false,
    boardSize: null,

  }

  setBoardSize = (boardSize) => {
    this.setState({
      boardSize,
      gameStarted: true
    })

  }

  render() {
    let mainContainer = null;
    if (this.state.won) {
      mainContainer = <Won />
    } else {
      this.state.gameStarted ? mainContainer = <Board size={this.state.boardSize} /> : mainContainer = <SetDificulty setBoardSize={this.setBoardSize} />;
    }
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          {mainContainer}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>

    );
  }
}

export default App;
