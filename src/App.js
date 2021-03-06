import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import SetDificulty from './components/SetDifficulty/SetDifficulty.js';
import Board from './components/Board/Board.js';
import Footer from './components/Footer/Footer.js';
import Won from './components/Won/Won.js';
import Faq from "./components/Faq/Faq.js";

class App extends Component {
  state = {
    gameStarted: false,
    won: false,
    boardSize: null,
    steps: 0,
    cheater: false,
    faqActive: false,
    board: []
  }

  changeState = (propStateName, state) => {
    this.setState(prevState => ({
      [propStateName]: state
    }))
  }
  tryAgain = () => {
    this.setState({
      gameStarted: false,
      won: false,
      boardSize: null,
      steps: 0,
      cheater: false,
      board: []
    })
  }

  render() {
    const { faqActive, boardSize, board, steps, cheater } = this.state;
    let mainContainer;
    const faq = faqActive ? <Faq boardSize={boardSize} changeParentState={this.changeState} board={board} /> : null;
    const blur = `${faqActive ? "blur" : ""}`;
    if (this.state.won) {
      mainContainer = <Won tryAgain={this.tryAgain} steps={steps} cheater={cheater} boardSize={boardSize} />
    } else {
      this.state.gameStarted ? mainContainer = <Board changeParentState={this.changeState} size={boardSize} steps={steps} board={board} /> : mainContainer = <SetDificulty changeParentState={this.changeState} />;
    }



    return (
      <div className="App">
        <header className={blur}>
          <Header />
        </header>
        <main className={blur}>
          {mainContainer}
        </main>
        <aside>
          {faq}
        </aside>
        <footer className={blur}>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
