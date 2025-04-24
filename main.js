

// next time your on, use a map, have the key be the char value and the value
// a array so you could say board['a'].row[1] as for assigning each element to the
// array not sure yet. Probably need to reference calculator project.

board = new Map();
rowptr = 0;
for(i = 0; i < 8; i++){

  const cell = document.querySelectorAll("#cell");
  letters = 'abcdefgh';
  letter = letters.charAt(i);

  board[letter] = [];

  for(row = 0; row < 8; row++){
    board[letter].push(cell[rowptr]);
    console.log(board[letter][row].textContent)
    rowptr++
  }

}