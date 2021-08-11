/**
  Input - array = [3, 5, -4, 8, 11, 1, -1, 6]
  Output - targetSum = 10

  time complexity - O(n^2)
  space complexity - O(1)
 */


const twoNumberSum = function(array, targetSum) {

  for(let i = 0; i < array.length - 1; i++) {

    for(let j = i + 1; j < array.length;j++) {

      if(array[i] + array[j] === targetSum) {
        return [array[j], array[i]]
      }
    }
  }

  return [];
}

const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10

console.log(twoNumberSum(array, 10))