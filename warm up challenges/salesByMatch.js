function sockMerchant(n, ar) {
  //Write code here
  let pairCount = 0;
  let amountOfSocksInPile = {};

  for (let sock of ar) {
    amountOfSocksInPile[sock] = amountOfSocksInPile[sock] + 1 || 1;
    if (amountOfSocksInPile[sock] % 2 === 0) {
      pairCount++;
    }
  }

  return pairCount;
}
