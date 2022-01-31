
function findNumberIn2DArray(array, target) {
    let row = 0, col = array[0].length - 1;

    while (row < array.length && col >= 0) {
        if (array[row][col] === target) return [row, col];
        else if (array[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }

    return [-1, -1];


}



const array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
console.log(findNumberIn2DArray(array, 7));
console.log(findNumberIn2DArray(array, 17));
console.log(findNumberIn2DArray(array, 16));
// 7

