function sherlockAndAnagrams(s) {
  let array = [];
  let numOfPairCount = 0;
  //"a b b a"
  //Get all combinations of substrings
  //['a', 'ab', 'abb', 'abba'....]
  for (let start = 0; start < s.length; start++) {
    for (let end = start + 1; end < s.length + 1; end++) {
      array.push(s.slice(start, end).split("").sort().join(""));
    }
  } //['a', 'ab', 'abb', 'abba'....., "n - 1" "n"]

  for (let brian = 0; brian < array.length - 1; brian++) {
    for (let micheal = brian + 1; micheal < array.length; micheal++) {
      if (array[brian] === array[micheal]) {
        numOfPairCount++;
      }
    }
  }

  return numOfPairCount;
}
