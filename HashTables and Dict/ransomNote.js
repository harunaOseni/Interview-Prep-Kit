function checkMagazine(magazine, note) {
  // Write your code here
  let hashTable = {};
  let YES = "Yes";
  let NO = "No";
  for (let word = 0; word < note.length; word++) {
    let noteWordExist = magazine.indexOf(note[word]);
    if (noteWordExist !== -1) {
      hashTable[note[word]] = true;
      magazine.splice(magazine.indexOf(note[word]), 1);
    } else {
      hashTable[note[word]] = false;
      return console.log(NO);
    }
  }
  return console.log(YES);
}


//Second Method....

function checkMagazine(magazine, note) {
  for (let word in note) {
    // If  word doesn't exist in magazine, return 'No'
    if (magazine.indexOf(note[word]) < 0) {
      return console.log("No");
    } else {
      // Get index of word and remove from magazine
      magazine.splice(magazine.indexOf(note[word]), 1);
    }
  }
  //if all words exist return Yes
  return console.log("Yes");
}
