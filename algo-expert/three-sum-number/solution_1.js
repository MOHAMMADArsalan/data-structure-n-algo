/**
 *
 *
  "array": [12, 3, 1, 2, -6, 5, -8, 6],
  "targetSum": 0

  time  O(n^3) | O(n) space

  */

const threeSumNumber = function (array, targetSum) {

    const triplets = [];
    array.sort((a, b) => a - b)
    for (let a = 0; a < array.length - 2; a++) {
        for (let b = a + 1; b < array.length - 1; b++) {
            for (let c = b + 1; c < array.length; c++) {
                const sum = array[a] + array[b] + array[c];
                if (sum === targetSum) {
                    triplets.push([array[a], array[b], array[c]])
                }
            }
        }
    }
    return triplets

}

console.log(threeSumNumber([12, 3, 1, 2, -6, 5, -8, 6], 0))