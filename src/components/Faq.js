import React, { Component } from 'react';
import '../styles/Faq.css'

class Faq extends Component {

  handleCheatButton = () => {
    const cheatedBoard = [...this.props.board];
    for (let i = 0; i < cheatedBoard.length - 2; i++) {
      cheatedBoard[i].value = i + 1
    }
    //penultimate tile is empty
    cheatedBoard[cheatedBoard.length - 2].value = 0;
    //last tile has highest value
    cheatedBoard[cheatedBoard.length - 1].value = cheatedBoard.length - 1;

    this.props.changeParentState("cheater", true)
    this.props.changeParentState("board", cheatedBoard)
  }
  render() {
    const boardSize = this.props.boardSize ** 2 - 1
    return (<>
      <div className="faqContainer">
        <i className="far fa-times-circle" onClick={() => { this.props.changeParentState("faqActive", false) }}></i>
        <div className="tips"><p>To win the game you need to change the order of the blocks to arrange numbers from 1 to {boardSize}. The last tile should be empty.</p>
          <p>You can change order by clicking the adjacent empty tile.</p></div>
        <div className="cheats"><h2>Need help?</h2>
          <button onClick={this.handleCheatButton}>Click here to cheat</button></div>



      </div>
      <div className={`${this.props.faqActive ? "blurActive" : ""}`}></div>
    </>);
  }
}

export default Faq;