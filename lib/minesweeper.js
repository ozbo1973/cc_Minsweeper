'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// minesweeper project
//building classes
//Game class
var Game = function () {
  function Game(numOfRows, numOfCols, numOfBombs) {
    _classCallCheck(this, Game);

    this._board = new Board(numOfRows, numOfCols, numOfBombs);
  }

  // method fx


  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(rowIdx, colIdx) {
      this._board.flipTile(rowIdx, colIdx);
      if (this._board.playerBoard[rowIdx][colIdx] === 'B') {
        console.log('boom!! game over');
        this._board.print();
      } else if (!this._board.hasSafeTiles()) {
        console.log('congrats!! you win!');
      } else {
        console.log('Current Board:');
        this._board.print();
      }
    } // .fx

  }]);

  return Game;
}(); // .Game class

//game board class


var Board = function () {
  function Board(numOfRows, numOfCols, numOfBombs) {
    _classCallCheck(this, Board);

    this._numOfBombs = numOfBombs;
    this._numOfTiles = numOfRows * numOfCols;
    this._playerBoard = Board.generatePlayerBoard(numOfRows, numOfCols);
    this._bombBoard = Board.generateBombBoard(numOfRows, numOfCols, numOfBombs);
  }
  //Getter methods


  _createClass(Board, [{
    key: 'flipTile',


    //method fx
    value: function flipTile(rowIdx, colIdx) {
      var currentTile = this._playerBoard[rowIdx][colIdx];
      if (currentTile !== ' ') {
        console.log('This tile has already been filpped');
        return;
      } else if (this._bombBoard[rowIdx][colIdx] === 'B') {
        this._playerBoard[rowIdx][colIdx] = 'B';
      } else {
        this._playerBoard[rowIdx][colIdx] = this.getNumberOfNeighborBombs(rowIdx, colIdx);
      } //./if
      this._numOfTiles--;
    } //./fx

  }, {
    key: 'getNumberOfNeighborBombs',
    value: function getNumberOfNeighborBombs(rowIdx, colIdx) {
      var _this = this;

      //get the number of surrounding tiles to check for bombs.
      var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      var numOfRows = this._bombBoard.length;
      var numOfCols = this._bombBoard[0].length;
      var numOfBombs = 0;
      neighborOffsets.forEach(function (offset) {
        var neighborRowIdx = rowIdx + offset[0];
        var neighborColIdx = colIdx + offset[1];
        if (neighborRowIdx >= 0 && neighborRowIdx < numOfRows && neighborColIdx >= 0 && neighborColIdx < numOfCols) {
          if (_this._bombBoard[neighborRowIdx][neighborColIdx] === 'B') {
            numOfBombs++;
          } //./if
        } //./if
      }); //./4each
      return numOfBombs;
    } //./fx

  }, {
    key: 'hasSafeTiles',
    value: function hasSafeTiles() {
      return this._numOfTiles !== this._numOfBombs;
    } // .fx

  }, {
    key: 'print',
    value: function print() {
      console.log(this._playerBoard.map(function (row) {
        return row.join('|');
      }).join('\n'));
    } //./fx

  }, {
    key: 'playerBoard',
    get: function get() {
      return this._playerBoard;
    }
  }], [{
    key: 'generatePlayerBoard',
    value: function generatePlayerBoard(numOfRows, numOfCols) {
      var board = [];
      //build the number of rows
      for (var iRow = 0; iRow < numOfRows; iRow++) {
        var row = [];
        // build the number of columns
        for (var iCol = 0; iCol < numOfCols; iCol++) {
          // add a column to row
          row.push(' ');
        } // ./for
        //add row to board
        board.push(row);
      } //./for
      return board;
    } //.fx

  }, {
    key: 'generateBombBoard',
    value: function generateBombBoard(numOfRows, numOfCols, numOfBombs) {
      var board = [];
      //build the number of rows
      for (var iRow = 0; iRow < numOfRows; iRow++) {
        var row = [];
        // build the number of columns
        for (var iCol = 0; iCol < numOfCols; iCol++) {
          // add a column to row
          row.push(null);
        } // ./for
        //add row to board
        board.push(row);
      } //./for

      //place random bombs
      var numberOfBombsPlaced = 0;
      //loop through to place bombs
      while (numOfBombs !== numberOfBombsPlaced) {
        var randomRowIdx = Math.floor(Math.random() * numOfRows);
        var randomColIdx = Math.floor(Math.random() * numOfCols);
        if (!board[randomRowIdx][randomColIdx]) {
          board[randomRowIdx][randomColIdx] = 'B';
          numberOfBombsPlaced++;
        }; //./IF
      } //./while
      return board;
    } // ./fx

  }]);

  return Board;
}(); //.board class

var g = new Game(3, 3, 3);
g.playMove(0, 1);

/* old code
const playerBoard = generatePlayerBoard(3,4);
const bombBoard = generateBombBoard(3,4,5);

//print out the boards
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

//call the tile to filpped
flipTile(playerBoard,bombBoard,0,2);
console.log('Updated Player Board.');
printBoard(playerBoard);
*/