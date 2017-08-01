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
};

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
    board[randomRowIndex][randomColIndex] = 'B';
    ++numberOfBombsPlaced;
    //** bombs may be placed on top of each other
  } //./while

  return board;
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join('|');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

//print out the boards
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);