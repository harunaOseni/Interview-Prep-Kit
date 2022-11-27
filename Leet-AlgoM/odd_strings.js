// Even or Odd String Interview Question - Hacker Rank
// Goal: To determine if it is a even or odd string.

//s = ['abc', 'abcd]
//m = 2

// convert string to ord value
//s = [[97, 98, 99], [97, 98, 99, 100]]

// value[i] = ord[s[i][0]]^m x ord[s[i][1]]^m x ord[s[i][2]]^m x ord[s[i][3]]^m .... x ord[s[i][n]]^m

function solve(m, s) {
  let result = [];
  let total = 1;

  // convert string to ord value and store in sub array
  for (let i = 0; i < s.length; i++) {
    let subArr = [];
    for (let j = 0; j < s[i].length; j++) {
      subArr.push(s[i].charCodeAt(j));
    }
    result.push(subArr);
  }

  // [[97, 98, 99], [97, 98, 99, 100]]

  /* 
  [[
    97^2 x 98^2 x 99^2,
  ], [
    97^2 x 98^2 x 99^2 x 100^2
  ]
]
  */

// multiply every value to the power of m and store in total
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            total *= Math.pow(result[i][j], m);
        }
    }

    // 97^2 x 98^2 x 99^2 x 97^2 x 98^2 x 99^2 x 100^2

    //check if total is even or odd
    if (total % 2 === 0) {
        return 'even';
        }
    return 'odd';
}
