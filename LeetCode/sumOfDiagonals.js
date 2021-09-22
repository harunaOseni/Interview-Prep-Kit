/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    let diagonalSum = 0;
    let length = mat.length - 1;
    
    for(let i = 0; i <= length; i++){
        if(i === length - i){
            diagonalSum += mat[i][i];
           } else{
               diagonalSum += mat[i][i] + mat[length - i][i];
        }
    }
    return diagonalSum;
};