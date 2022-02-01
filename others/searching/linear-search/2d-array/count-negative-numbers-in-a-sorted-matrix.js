function countNegatives(matrix) {
    let count = 0;

    for(let row = 0; row < matrix.length; row++) {
        for(let column = 0; column < matrix[row].length; column++) {
            if(matrix[row][column] < 0) count++;
        }
    }

    return count
}

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))