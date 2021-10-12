// Solution1 ---> wrong on console but right on logic (great for interview explanation)
/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function (board) {
  let stable = true;
  //Error Checking
  if (!board) {
    return board;
  }

  //Step1: Crush Row
  for (let index = 0; index < board.length; index++) {
    for (let jedex = 0; jedex < board[index].length; jedex++) {
      let num1 = Math.abs(board[index][jedex]);
      let num2 = Math.abs(board[index][jedex + 1]);
      let num3 = Math.abs(board[index][jedex + 2]);
      if (num1 === num2 && num2 === num3 && num1 !== 0) {
        board[index][jedex] = -num1;
        board[index][jedex + 1] = -num2;
        board[index][jedex + 2] = -num3;
        stable = false;
      }
    }
  }

  //Steps2: Crush Column
  for (let index = 0; index < board[0].length; index++) {
    for (let jedex = 0; jedex < board.length - 2; jedex++) {
      let num1 = Math.abs(board[index][jedex]);
      let num2 = Math.abs(board[index + 1][jedex]);
      let num3 = Math.abs(board[index + 2][jedex]);
      if (num1 === num2 && num2 === num3 && num1 !== 0) {
        board[index][jedex] = -num1;
        board[index + 1][jedex] = -num2;
        board[index + 2][jedex] = -num3;
        stable = false;
      }
    }
  }

  //Step3: Gravity
  //Moving candys down after crushing
  for (let index = 0; index < board[0].length; index++) {
    let gravityIndex = board.length - 1;
    for (let revex = board.length - 1; revex >= 0; revex--) {
      if (board[revex][index] > 0) {
        board[gravityIndex][index] = board[revex][index];
        gravityIndex--;
      }
    }
    for (let jedex = gravityIndex; jedex >= 0; jedex--) {
      if (board[gravityIndex][jedex] < 0) {
        board[gravityIndex][jedex] === 0;
      }
    }
  }

  //Step4: return stable board
  if (stable) {
    return board;
  } else {
    return candyCrush(board);
  }
};
