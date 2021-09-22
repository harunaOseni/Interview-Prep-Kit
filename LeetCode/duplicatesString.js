/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    let duplicates = /([a-z])\1/; 
    while(s.match(duplicates)){
        s = s.replace(duplicates, "");
          }
    return s;
};