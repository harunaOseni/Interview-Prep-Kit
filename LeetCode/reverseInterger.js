var reverse = function (x) {
  let reversed = parseInt(x.toString().split("").reverse().join(""));
  let aNum = reversed * Math.sign(x);
  if (aNum < Math.pow(2, 31) * -1 || aNum > Math.pow(2, 31) - 1) {
    return 0;
  }
  return aNum;
};
