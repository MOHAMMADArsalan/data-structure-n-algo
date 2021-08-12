
/**
 * input -
 *        array = [5, 1, 22, 25, 6, -1, 8, 10]
 *        sequence = [1, 6, -1, 10]
 *
 * output - boolean
 *
 *
 * time complexity - O(n^2) because we are removing first item from array
 * space complexity - O(1)
 */

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

const isValidSubsequence = function (array, sequence) {

    for (let num of array) {
        if (num === sequence[0]) {
            sequence.shift();
        }
    }

    return sequence.length === 0
}

console.log(isValidSubsequence(array, sequence))