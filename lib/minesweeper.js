'use strict';

// minesweeper project

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  //build the number of rows
  for (var iRow = 0; iRow < numberOfRows; iRow++) {
    var row = [];
    // build the number of columns
    for (var iColumn = 0; iColumn < numberOfColumns; iColumn++) {
      // add a column to row
      row.push(' ');
    } // ./for
    //add row to board
    board.push(row);
  } //./for

  return board;
}; //.fx

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  //build the number of rows
  for (var iRow = 0; iRow < numberOfRows; iRow++) {
    var row = [];
    // build the number of columns
    for (var iColumn = 0; iColumn < numberOfColumns; iColumn++) {
      // add a column to row
      row.push(null);
    } // ./for
    //add row to board
    board.push(row);
  } //./for

  //place random bombs
  var numberOfBombsPlaced = 0;
  //loop through to place bombs
  while (numberOfBombs !== numberOfBombsPlaced) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColIndex = Math.floor(Math.random() * numberOfColumns);
    if (!board[randomRowIndex][randomColIndex]) {
      board[randomRowIndex][randomColIndex] = 'B';
      numberOfBombsPlaced++;
    }; //./IF
  } //./while

  return board;
}; // ./fx

var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, colIndex) {
  //get the number of surrounding tiles to check for bombs.
  var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  var numberOFRows = bombBoard.length;
  var numberOfColumns = bombBoard[0].length;
  var numberOfBombs = 0;
  neighborOffsets.forEach(function (offset) {
    var neighborRowIndex = rowIndex + offset[0];
    var neighborColIndex = colIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOFRows && neighborColIndex >= 0 && neighborColIndex < numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColIndex] === 'B') {
        numberOfBombs++;
      } //./if
    } //./if
  }); //./4each
  return numberOfBombs;
}; //./fx

var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, colIndex) {
  var currentTile = playerBoard[rowIndex][colIndex];
  if (currentTile !== ' ') {
    console.log('This tile has already been filpped');
    return;
  } else if (bombBoard[rowIndex][colIndex] === 'B') {
    playerBoard[rowIndex][colIndex] = 'B';
  } else {
    playerBoard[rowIndex][colIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, colIndex);
  } //./if
}; //./fx


var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join('|');
  }).join('\n'));
}; //./fx

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

//print out the boards
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

//call the tile to filpped
flipTile(playerBoard, bombBoard, 0, 2);
console.log('Updated Player Board.');
printBoard(playerBoard);