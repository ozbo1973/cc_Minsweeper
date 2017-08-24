// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);

import {Board} from './board';
class Game {
  constructor(numOfRows,numOfCols,numOfBombs) {
    this._board = new Board(numOfRows,numOfCols,numOfBombs);
  }

  // method fx
  playMove(rowIdx,colIdx) {
    this._board.flipTile(rowIdx,colIdx);
    if(this._board.playerBoard [rowIdx][colIdx] === 'B') {
      console.log('boom!! game over');
      this._board.print();
    } else if (!this._board.hasSafeTiles()){
      console.log('congrats!! you win!')
    } else {
      console.log('Current Board:');
      this._board.print();
    }
  }// .fx
}// .Game class

//const g = new Game(3,3,3);
//g.playMove(0,1);
