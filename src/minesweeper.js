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
} //.fx

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
    if (!board[randomRowIndex][randomColIndex]) {
      board[randomRowIndex][randomColIndex]= 'B';
      numberOfBombsPlaced++;
    }; //./IF
  }//./while

  return board;
}// ./fx

const getNumberOfNeighborBombs = (bombBoard, rowIndex,colIndex) => {
  //get the number of surrounding tiles to check for bombs.
  const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const numberOFRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColIndex = colIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOFRows && neighborColIndex >= 0 && neighborColIndex < numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColIndex] === 'B') {
        numberOfBombs++
      }//./if
    }//./if

  })//./4each
  return numberOfBombs;
}//./fx

  const flipTile = (playerBoard, bombBoard, rowIndex,colIndex) => {
    const currentTile = playerBoard[rowIndex][colIndex];
    if (currentTile !== ' ') {
      console.log('This tile has already been filpped');
      return;
    } else if (bombBoard[rowIndex][colIndex] === 'B'){
      playerBoard[rowIndex][colIndex] = 'B'
    } else {
      playerBoard[rowIndex][colIndex] = getNumberOfNeighborBombs(bombBoard,rowIndex,colIndex);
    }//./if
  }//./fx


const printBoard = board => {
  console.log(board.map(row => row.join('|')).join('\n'));
}//./fx

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
