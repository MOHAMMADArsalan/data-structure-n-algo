/**
 * arrayOne = [-1, 5, 10, 20, 28, 3]
 * arrayTwo = [26, 134, 135, 15, 17]
 *
 * [28, 26]
 *
 * time O(n log(n)) |  space (1)
 */

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let smallestValue = Infinity;
    let answer = []

    let p1 = 0;
    let p2 = 0;

    while (p1 < arrayOne.length && p2 < arrayTwo.length) {
        let num1 = arrayOne[p1]
        let num2 = arrayTwo[p2]
        if (Math.abs(num1 - num2) < smallestValue) {
            smallestValue = Math.abs(num1 - num2);
            answer = [num1, num2];
        }

        if (num1 > num2) {
            p2++;
        } else {
            p1++;
        }
    }
    return answer;

}
const arrayOne = [-1, 5, 10, 20, 28, 3]
const arrayTwo = [26, 134, 135, 15, 17]
// [-1, 3, 5, 10, 20, 28]
// [ 15, 17, 26, 134, 135];

console.log(smallestDifference(arrayOne, arrayTwo))