import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header.js';
import SetDificulty from './components/SetDifficulty.js';
import Board from './components/Board.js'
import Footer from './components/Footer.js'


class App extends Component {
  state = {
    gameStarted: false,
    faq: false,
    won: false,
  }

  render() {
    let mainContainer = null;
    this.state.gameStarted ? mainContainer = <Board /> : mainContainer = <SetDificulty />;
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
