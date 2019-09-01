import React, { Component } from 'react';
import TileClass from "./TileClass";
import Tile from "./Tile";

class Board extends Component {

  componentWillMount() {
    this.prepareBoard()
  }
  prepareBoard() {
    let board = [];
    for (let i = 0; i < this.props.size ** 2; i++) {
      board.push(new TileClass(i));
    }

    board = this.shuffleBoard(board);
    this.setState({ board });
  }

  shuffleBoard = (board) => {
    board.sort(() => .5 - Math.random());
    let index = 0
    for (let y = 0; y < this.props.size; y++) {
      for (let x = 0; x < this.props.size; x++) {
        board[index].coordinates = [x, y]
        index++
      }
    }
    return board;
  }
  createTiles(board) {
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

