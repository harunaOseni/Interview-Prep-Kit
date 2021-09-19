var firstUniqChar = function(str) {
    for (var i=0; i<str.length; i++) {
      if ( str.indexOf(str[i]) === str.lastIndexOf(str[i]) ) {
        return i; // repeats
      }
    }
  return -1;
};