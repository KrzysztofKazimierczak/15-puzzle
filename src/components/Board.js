import React, { Component } from 'react';
import TileClass from "./TileClass";

class Board extends Component {

  componentWillMount() {
    this.prepareBoard()
  }
  prepareBoard() {
    const board = [];
    for (let i = 0; i < this.props.size; i++) {
      board.push(new TileClass(i))
    }
    this.setState({
      board
    })
  }

  render() {
    return (

      <div></div>

    );
  }
}

export default Board;

