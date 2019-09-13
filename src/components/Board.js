import React, { Component } from 'react';
import TileClass from "./TileClass";
import Tile from "./Tile";
import '../styles/Board.css';

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
    this.props.changeParentState("board", board)
  }

  shuffleBoard = (board) => {
    board.sort(() => .5 - Math.random());
    let index = 0
    for (let y = 0; y < this.props.size; y++) {
      for (let x = 0; x < this.props.size; x++) {
        board[index].coordinates = [x, y];
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
            index={index}
            value={this.props.board[index].value}
            move={this.handleClick}
            size={this.props.size}>
          </Tile>
        )
      })
    )
  }

  handleClick = (e) => {
    const newBoard = [...this.props.board];
    let currentTile;
    let targetTile;
    newBoard.forEach(tile => {
      if (tile.value === 0) {
        currentTile = tile;
      } else if (tile.value === parseInt(e.target.textContent)) {
        targetTile = tile;
      }
    })

    if (this.checkIsMovePossible(currentTile.coordinates, targetTile.coordinates)) {
      [currentTile.value, targetTile.value] = [targetTile.value, currentTile.value];
      this.props.changeParentState("board", newBoard);
      this.props.changeParentState("steps", this.props.steps + 1);
    }
    if (this.checkResult(this.props.board)) {
      this.props.changeParentState("won", true)
    }
  }

  checkIsMovePossible = (current, target) => {
    // Math.sqrt and 2x Math.pow makes always positive numbers and prevents illegal moves
    if (Math.sqrt(Math.pow(target[0] - current[0], 2) + Math.pow(target[1] - current[1], 2)) === 1) {
      return true
    }
  }
  checkResult = (tiles) => {
    let counter = 0;
    for (let tile of tiles) {
      if (tile.value === this.props.size * tile.coordinates[1] + tile.coordinates[0] + 1) {
        counter++;
      }
    }
    return counter === this.props.size ** 2 - 1;
  }

  render() {

    const currentBoard = this.createTiles(this.props.board);


    return (
      <>
        <div className="board">
          {currentBoard}
          <i className="far fa-question-circle" onClick={() => { this.props.changeParentState("faqActive", true) }}></i>
        </div>
      </>
    );
  }
}

export default Board;

