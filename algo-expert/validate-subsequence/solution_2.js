
/**
 * input -
 *        array = [5, 1, 22, 25, 6, -1, 8, 10]
 *        sequence = [1, 6, -1, 10]
 *
 * output - boolean
 *
 *
 * time complexity - O(n) because we are removing first item from array
 * space complexity - O(1)
 */

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

const isValidSubsequence = function (array, sequence) {
    let seqIdx = 0;

    for (let num of array) {

        if(num === sequence[seqIdx]) {
            seqIdx++;
        }

    }

    return sequence.length === seqIdx;
}

console.log(isValidSubsequence(array, sequence))