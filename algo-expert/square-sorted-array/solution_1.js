
/**
 * input -
 *        array = [1, 2, 3, 5, 6, 8, 9]
 *
 * output - [1, 4, 9, 25, 36, 64, 81]
 *
 *
 * time complexity - O(n log(n))
 * space complexity - O(1)
 */

const array = [1, 2, 3, 5, 6, 8, 9];

const squareSortedArray = function (array) {
    return array.map((num) => num * num).sort((a, b) => a - b)
}

console.log(squareSortedArray(array));