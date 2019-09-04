import React, { Component } from 'react';

class Won extends Component {
  handleClick = () => {
    this.props.changeParentState("won", false)
    this.props.changeParentState("gameStarted", false)
    this.props.changeParentState("boardSize", null)
  }
  render() {
    return (
      <div className="Won">
        <h2>Congratulations!</h2>
        <p>U won the game in <span>{this.props.steps}</span> steps</p>
        <button onClick={this.handleClick}>Do you want try again?</button>
      </div>
    );
  }
}

export default Won;