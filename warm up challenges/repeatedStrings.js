function repeatedString(s, n) {
  let aCount = s.split("").filter((element) => element === "a").length;
  let times = Math.floor(n / s.length);
  let remainder = Math.floor(n % s.length);
  let remainingACount = s
    .split("")
    .slice(0, remainder)
    .filter((element) => element === "a").length;

  return aCount * times + remainingACount;
}
