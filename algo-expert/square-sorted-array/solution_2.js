
/**
 * input -
 *        [1, 2, 3, 5, 6, 8, 9]
 *
 * output -
 *        [1, 4, 9, 25, 36, 64, 81]
 *
 *
 * time complexity - O(n)
 * space complexity - O(n)
 */

const array = [1, 2, 3, 5, 6, 8, 9];

const squareSortedArray = function (array) {
    const outputArray = [];
    let left = 0, right = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        const largest = Math.abs(array[right]);
        const smallest = Math.abs(array[left]);

        if (smallest > largest) {
            outputArray[i] = smallest * smallest;
            left++;
        } else {
            outputArray[i] = largest * largest;
            right--
        }
    }

    return outputArray;
}

console.log(squareSortedArray(array));