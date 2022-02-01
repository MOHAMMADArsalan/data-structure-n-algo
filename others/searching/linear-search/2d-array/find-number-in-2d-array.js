
function findNumberIn2DArray(array, target) {
    for(let row = 0; row < array.length;row++) {
        for(let col = 0; col < array[row].length; col++) {
            if(array[row][col] === target) {
                return [row, col];
            }
        }
    }
    return [-1, -1]
}


function findNumberIn2DArray2(array, target) {
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

