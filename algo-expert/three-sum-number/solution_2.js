/**
 *
 *
  "array": [12, 3, 1, 2, -6, 5, -8, 6],
  "targetSum": 0


  */

const threeSumNumber = function (array, targetSum) {

    const triplets = [];
    array.sort((a, b) => a - b)
    for (let a = 0; a < array.length - 2; a++) {
        let left = a + 1;
        let right = array.length - 1;
        const currentNum = array[a];

        while (left < right) {
            const smallest = array[left];
            const largest = array[right];
            if (smallest + largest + currentNum === targetSum) {
                triplets.push([currentNum, smallest, largest])
                left++;
                right--;
            } else if (smallest + largest + currentNum < targetSum) {
                left++;
            } else {
                right--;
            }
        }
    }
    return triplets

}

console.log(threeSumNumber([12, 3, 1, 2, -6, 5, -8, 6], 0))
console.log(threeSumNumber([1,2,3], 6))