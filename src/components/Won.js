import React, { Component } from 'react';

class Won extends Component {
  handleClick = () => {
    this.props.changeParentState("won", false)
    this.props.changeParentState("gameStarted", false)
    this.props.changeParentState("boardSize", null)
    this.props.changeParentState("cheater", false)
  }
  render() {
    return (
      <div className="Won">
        <h2>Congratulations!</h2>
        <p>You won the game in <span>{this.props.steps}</span> steps</p>
        {this.props.cheater ? <p>Now I encourage You to try again, this time without cheating</p> : <p>{this.props.boardSize <= 4 ? "Now I encourage You to try again on higher level" : "You beat the highest level"}</p>}
        <button onClick={this.handleClick}>Do you want try again?</button>
      </div>
    );
  }
}

export default Won;