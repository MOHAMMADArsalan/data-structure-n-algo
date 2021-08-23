/**
 * arrayOne = [-1, 5, 10, 20, 28, 3]
 * arrayTwo = [26, 134, 135, 15, 17]
 *
 * [28, 26]
 */

function smallestDifference(arrayOne, arrayTwo) {
    let smallestValue = Infinity;
    let answer = []

    for(let num1 of arrayOne) {
        for(let num2 of arrayTwo) {
            if(Math.abs(num1 - num2) < smallestValue) {
                smallestValue = Math.abs(num1 - num2);
                answer = [num1, num2];
            }
        }
    }
    return answer;

}
const arrayOne = [-1, 5, 10, 20, 28, 3]
const arrayTwo = [26, 134, 135, 15, 17]

console.log(smallestDifference(arrayOne, arrayTwo))