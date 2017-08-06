// minesweeper project
//building classes
//Game class
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

//game board class
class Board {
  constructor(numOfRows,numOfCols,numOfBombs) {
    this._numOfBombs = numOfBombs;
    this._numOfTiles = numOfRows * numOfCols;
    this._playerBoard = Board.generatePlayerBoard(numOfRows, numOfCols);
    this._bombBoard = Board.generateBombBoard(numOfRows, numOfCols,numOfBombs);
  }
  //Getter methods
  get playerBoard() {return this._playerBoard}

  //method fx
  flipTile(rowIdx,colIdx) {
    const currentTile = this._playerBoard[rowIdx][colIdx];
    if (currentTile !== ' ') {
      console.log('This tile has already been filpped');
      return;
    } else if (this._bombBoard[rowIdx][colIdx] === 'B'){
      this._playerBoard[rowIdx][colIdx] = 'B'
    } else {
      this._playerBoard[rowIdx][colIdx] = this.getNumberOfNeighborBombs(rowIdx,colIdx);
    }//./if
    this._numOfTiles--
  }//./fx

  getNumberOfNeighborBombs(rowIdx,colIdx) {
    //get the number of surrounding tiles to check for bombs.
    const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    const numOfRows = this._bombBoard.length;
    const numOfCols = this._bombBoard[0].length;
    let numOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIdx = rowIdx + offset[0];
      const neighborColIdx = colIdx + offset[1];
      if (neighborRowIdx >= 0 && neighborRowIdx < numOfRows && neighborColIdx >= 0 && neighborColIdx < numOfCols) {
        if (this._bombBoard[neighborRowIdx][neighborColIdx] === 'B') {
          numOfBombs++
        }//./if
      }//./if
    })//./4each
    return numOfBombs;
  }//./fx

  hasSafeTiles() {
    return this._numOfTiles !== this._numOfBombs;
  }// .fx

  print() {
    console.log(this._playerBoard.map(row => row.join('|')).join('\n'));
  }//./fx

  static generatePlayerBoard(numOfRows,numOfCols) {
    let board = [];
    //build the number of rows
    for (var iRow = 0; iRow < numOfRows; iRow++) {
      let row = [];
      // build the number of columns
      for (var iCol= 0; iCol < numOfCols; iCol++) {
        // add a column to row
        row.push(' ');
      } // ./for
      //add row to board
      board.push(row);
    }//./for
    return board;
  } //.fx

  static generateBombBoard(numOfRows,numOfCols,numOfBombs) {
    let board = [];
    //build the number of rows
    for (var iRow = 0; iRow < numOfRows; iRow++) {
      let row = [];
      // build the number of columns
      for (var iCol= 0; iCol < numOfCols; iCol++) {
        // add a column to row
        row.push(null);
      } // ./for
      //add row to board
      board.push(row);
    }//./for

    //place random bombs
    let numberOfBombsPlaced = 0;
    //loop through to place bombs
    while (numOfBombs !== numberOfBombsPlaced) {
      let randomRowIdx = Math.floor(Math.random() * numOfRows);
      let randomColIdx = Math.floor(Math.random() * numOfCols);
      if (!board[randomRowIdx][randomColIdx]) {
        board[randomRowIdx][randomColIdx]= 'B';
        numberOfBombsPlaced++;
      }; //./IF
    }//./while
    return board;
  }// ./fx

} //.board class

const g = new Game(3,3,3);
g.playMove(0,1);


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
