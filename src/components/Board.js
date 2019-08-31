import React, { Component } from 'react';
import TileClass from "./TileClass";
import Tile from "./Tile";

class Board extends Component {

  componentWillMount() {
    this.prepareBoard()
  }
  prepareBoard() {
    const board = [];
    for (let i = 0; i < this.props.size; i++) {
      board.push(new TileClass(i))
    }
    this.setState({ board })
  }
  createTiles(board) {
    console.log('dupa');
    return (
      board.map((tile, index) => {
        return (
          <Tile
            key={index}
            value={this.state.board[index].value}>

          </Tile>
        )
      })

    )
  }



  render() {

    const currentBoard = this.createTiles(this.state.board);
    return (
      <div className="board">
        {currentBoard}
      </div>

    );
  }
}

export default Board;

