import React, { Component } from 'react';
import '../styles/SetDifficulty.css'


class SetDifficulty extends Component {

  handleClick = (boardsize) => {
    this.props.setBoardSize(boardsize)
  }
  render() {

    return (
      <>
        <h2>Select difficulty:</h2>
        <section className="settings">
          <div onClick={() => { this.handleClick(9) }} >
            <p>easy</p>
            <span>3x3</span>
          </div>
          <div onClick={() => { this.handleClick(16) }}>
            <p>normal</p>
            <span>4x4</span>
          </div>
          <div onClick={() => { this.handleClick(25) }}>
            <p>hard</p>
            <span>5x5</span>
          </div>

        </section>
      </>
    );
  }
}

export default SetDifficulty;