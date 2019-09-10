import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header.js';
import SetDificulty from './components/SetDifficulty.js';
import Board from './components/Board.js';
import Footer from './components/Footer.js';
import Won from './components/Won.js';
import Faq from "./components/Faq.js";

class App extends Component {
  state = {
    gameStarted: false,
    won: false,
    boardSize: null,
    steps: null,
    cheater: false,
    faqActive: false,
    board: []
  }

  changeState = (propStateName, arg) => {
    this.setState(prevState => ({
      [propStateName]: arg
    }))
  }

  render() {
    let mainContainer;
    const faq = this.state.faqActive ? <Faq boardSize={this.state.boardSize} changeParentState={this.changeState} board={this.state.board} /> : null;
    const blur = `${this.state.faqActive ? "blur" : ""}`;
    if (this.state.won) {
      mainContainer = <Won changeParentState={this.changeState} steps={this.state.steps} cheater={this.state.cheater} boardSize={this.state.boardSize} />
    } else {
      this.state.gameStarted ? mainContainer = <Board changeParentState={this.changeState} size={this.state.boardSize} steps={this.state.steps} board={this.state.board} /> : mainContainer = <SetDificulty changeParentState={this.changeState} />;
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
