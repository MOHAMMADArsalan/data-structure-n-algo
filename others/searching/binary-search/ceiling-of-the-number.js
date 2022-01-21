/**
 * return the number which greater than or equal to the target number;
*/

function ceilingOfTheNumber(numbers, target) {

    let start = 0, end = numbers.length - 1;

    while (start <= end) {
        // start -> 0 , start -> 3 , e -> 5 -> 3 -> 2
        const mid = Math.floor((start + end) / 2); // 2
        // mid = 2 -> 4 -> 3,  target = 4;
        if(numbers[mid] === target) return numbers[mid];
        else if(numbers[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return numbers[start]
}

console.log(ceilingOfTheNumber([1,2,3,5,6,9], 4)) // output = 5;
console.log(ceilingOfTheNumber([1,2,3,5,6,9], 3)) // output = 3;