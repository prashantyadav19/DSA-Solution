/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i=0, j = matrix[0].length-1;

    while(i<matrix.length && j >=0) {
        if(matrix[i][j] == target) {
            return true;
        } else if(matrix[i][j] < target) {
                i++
        } else{
            j--
        }
    }
    return false;

};