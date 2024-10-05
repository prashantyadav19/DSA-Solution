/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let i = 0, j = rows*cols -1;
    
    while (i <= j ) {
       let mid = Math.floor(i + ((j -i))/2);
       let row = Math.floor(mid / cols)
       let col = Math.floor(mid % cols)
        if (matrix[row][col] == target) {
            return true
        }else if (matrix[row][col] > target) {
            j--;
        } else {
            i++;
        }
    }
    return false;
};