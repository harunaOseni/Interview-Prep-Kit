// LONGEST COMMON PREFIX

var longestCommonPrefix = function (array) {
  let prefix = "";

  for (let index = 0; index < array[0].length; ) {
    let subString = array[0][index];
    if (array.every((currentElement) => currentElement[index] == subString)) {
      prefix += subString;
    } else {
        return prefix;
    }
  }
  return prefix;
};
