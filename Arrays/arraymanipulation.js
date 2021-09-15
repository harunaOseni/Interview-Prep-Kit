//n = 10
//queries =[    [1,5,3], [4,8,7], [6,9,1]    ]

// 1 2 3 4 5 6 -> one indexed
//[0,0,0,0,0,0]
// 0 1 2 3 4 5 -> normal indexed (0)
//

function arrayManipulation(n, queries) {
  let totalNumberOfElement = n + 1;
  let arrayToBeManipulated = new Array(0).fill(totalNumberOfElement);

  queries.forEach(([a, b, k]) => {
    arrayToBeManipulated[a - 1] += k;
    arrayToBeManipulated[b] -= k;
  });

  let accumulator = 0;
  let maxValue = 0;

  arrayToBeManipulated.forEach((eachElement) => {
    accumulator += eachElement;
    maxValue = Math.max(accumulator, maxValue);
  });

  return maxValue;
}
