'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);

var _board = require('./board');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(numOfRows, numOfCols, numOfBombs) {
    _classCallCheck(this, Game);

    this._board = new _board.Board(numOfRows, numOfCols, numOfBombs);
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

//const g = new Game(3,3,3);
//g.playMove(0,1);