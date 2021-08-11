/**
  Input - array = [3, 5, -4, 8, 11, 1, -1, 6]
  Output - targetSum = 10

  time complexity - O(nlog(n))
  space complexity - O(n)
 */


const twoNumberSum = function (array, targetSum) {
    array.sort((a, b) => a - b);
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while(leftIndex !== rightIndex) {
        const sum = array[leftIndex] + array[rightIndex];

        if(sum === targetSum) {
            return [array[leftIndex], array[rightIndex]]
        }else if(sum < targetSum) {
            leftIndex++;
        } else if(sum > targetSum) {
            rightIndex--;
        }

    }

    return []
}
const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10
console.log(twoNumberSum(array, 10))