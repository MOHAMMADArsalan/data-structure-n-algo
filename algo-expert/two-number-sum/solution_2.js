/**
  Input - array = [3, 5, -4, 8, 11, 1, -1, 6]
  Output - targetSum = 10

  time complexity - O(n)
  space complexity - O(n)
 */


const twoNumberSum = function (array, targetSum) {

    const dict = {};

    for (let num of array) {
        const target = targetSum - num;
        if (target in dict) {
            return [target, num]
        }

        dict[num] = num;
    }

    return []

}
const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10
console.log(twoNumberSum(array, 10))