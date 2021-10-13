//Works like a magic on console.
var candyCrush = function (board) {
  let r = board.length;
  let c = board[0].length;
  let recurse = false;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (j + 2 < c) {
        if (
          Math.abs(board[i][j]) === Math.abs(board[i][j + 1]) &&
          Math.abs(board[i][j]) === Math.abs(board[i][j + 2]) &&
          Math.abs(board[i][j]) !== 0
        ) {
          board[i][j] =
            board[i][j + 1] =
            board[i][j + 2] =
              board[i][j] < 0 ? board[i][j] : -1 * board[i][j];
          recurse = true;
        }
      }
      if (i + 2 < r) {
        if (
          Math.abs(board[i][j]) === Math.abs(board[i + 1][j]) &&
          Math.abs(board[i + 2][j]) === Math.abs(board[i][j]) &&
          Math.abs(board[i][j]) !== 0
        ) {
          board[i][j] =
            board[i + 1][j] =
            board[i + 2][j] =
              board[i][j] < 0 ? board[i][j] : -1 * board[i][j];
          recurse = true;
        }
      }
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] < 0) {
        board[i][j] = 0;
        let newI = i - 1;
        while (newI >= 0 && board[newI][j] !== 0) {
          let temp = board[newI][j];
          board[newI][j] = board[newI + 1][j];
          board[newI + 1][j] = temp;
          newI--;
        }
      }
    }
  }
  return recurse ? candyCrush(board) : board;
};

