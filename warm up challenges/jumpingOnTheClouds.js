function jumpingOnClouds(c) {
  // Write your code here
  let amountOfJumps = 0;

  for (let i = 0; i < c.length; i++) {
    if (c[i] === 0 && c[i + 1] === 0 && c[i] === 0 && c[i + 2] === 0) {
      amountOfJumps++;
      i += 1;
    } else if (
      (c[i] === 0 && c[i + 1] === 0) ||
      (c[i] === 0 && c[i + 2] === 0)
    ) {
      amountOfJumps++;
    }
  }
  return amountOfJumps;
}
