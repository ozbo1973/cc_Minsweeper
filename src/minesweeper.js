// minesweeper project

const generatePlayerBoard = (numberOfRows,numberOfColumns) => {
  let board = [];
  //build the number of rows
  for (var iRow = 0; iRow < numberOfRows; iRow++) {
    let row = [];
    // build the number of columns
    for (var iColumn= 0; iColumn < numberOfColumns; iColumn++) {
      // add a column to row
      row.push(' ');
    } // ./for
    //add row to board
    board.push(row);
  }//./for

  return board;

}

const generateBombBoard = (numberOfRows,numberOfColumns,numberOfBombs) => {
  let board = [];
  //build the number of rows
  for (var iRow = 0; iRow < numberOfRows; iRow++) {
    let row = [];
    // build the number of columns
    for (var iColumn= 0; iColumn < numberOfColumns; iColumn++) {
      // add a column to row
      row.push(null);
    } // ./for
    //add row to board
    board.push(row);
  }//./for

  //place random bombs
  let numberOfBombsPlaced = 0;
  //loop through to place bombs
  while (numberOfBombs !== numberOfBombsPlaced) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColIndex]= 'B';
    numberOfBombsPlaced++;
    //** bombs may be placed on top of each other
  }//./while

  return board;
}

const printBoard = board => {
  console.log(board.map(row => row.join('|')).join('\n'));
}

const playerBoard = generatePlayerBoard(3,4);
const bombBoard = generateBombBoard(3,4,5);

//print out the boards
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
