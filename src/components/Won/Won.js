import React, { Component } from 'react';
import './Won.css'

class Won extends Component {
  handleClick = () => {
    this.props.changeParentState("won", false)
    this.props.changeParentState("gameStarted", false)
    this.props.changeParentState("boardSize", null)
    this.props.changeParentState("cheater", false)
    this.props.changeParentState("steps", 0)
  }
  render() {
    return (
      <div className="won">
        <div className="congrat">
          <h2>Congratulations!</h2>
          <p>You won the game in <span>{this.props.steps}</span> {this.props.steps === 1 ? "step" : "steps"}</p>
        </div>
        <div className="again">
          {this.props.cheater ? <p>Now I encourage you to try again, this time without cheating.</p> : <p>{this.props.boardSize <= 4 ? "Now I encourage You to try again on higher level." : "You beat the highest level."}</p>}
          <button onClick={this.handleClick}>try again</button>
        </div>
      </div>
    );
  }
}

export default Won;