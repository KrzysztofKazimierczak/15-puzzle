import React, { Component } from 'react';
import '../styles/SetDifficulty.css'


class SetDifficulty extends Component {

  handleClick = value => {
    this.props.changeParentState("boardSize", value)
    this.props.changeParentState("gameStarted", true)
  }
  render() {

    return (
      <>
        <h2>Select difficulty:</h2>
        <section className="settings">
          <div onClick={() => { this.handleClick(3) }} >
            <p>easy</p>
            <span>3x3</span>
          </div>
          <div onClick={() => { this.handleClick(4) }}>
            <p>normal</p>
            <span>4x4</span>
          </div>
          <div onClick={() => { this.handleClick(5) }}>
            <p>hard</p>
            <span>5x5</span>
          </div>

        </section>
      </>
    );
  }
}

export default SetDifficulty;