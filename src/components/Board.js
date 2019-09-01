import React, { Component } from 'react';
import TileClass from "./TileClass";
import Tile from "./Tile";

class Board extends Component {

  componentWillMount() {
    this.prepareBoard()
  }
  prepareBoard() {
    let board = [];
    let id = 0;
    if (id !== this.props.size ** 2) {
      for (let y = 0; y < this.props.size; y++) {
        for (let x = 0; x < this.props.size; x++) {
          board.push(new TileClass(id, [x, y]));
          id++;
        }
      }
    }

    board = this.shuffleBoard(board);
    this.setState({ board });
  }

  shuffleBoard = (board) => {
    return board.sort(() => {
      return .5 - Math.random();
    });
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

