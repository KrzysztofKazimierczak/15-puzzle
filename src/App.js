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
    steps: null,
  }

  changeState = (propStateName, arg) => {
    this.setState(prevState => ({
      [propStateName]: arg
    }))
  }

  render() {
    let mainContainer;
    if (this.state.won) {
      mainContainer = <Won changeParentState={this.changeState} steps={this.state.steps} />
    } else {
      this.state.gameStarted ? mainContainer = <Board changeParentState={this.changeState} size={this.state.boardSize} steps={this.state.steps} /> : mainContainer = <SetDificulty changeParentState={this.changeState} />;
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
