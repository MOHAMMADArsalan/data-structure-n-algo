function findFirstAndLastPositionOfNumbers(numbers, target) {
    const first = findPosition(numbers, target);
    if(first === -1) return [-1, -1];

    const last = findPosition(numbers, target, false);
    if (numbers[first]) {
        return [first, last];
    }
}


function findPosition(numbers, target, findFirstPosition = true) {
    let start = 0, end = numbers.length - 1;
    let ans = -1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (target < numbers[mid]) {
            end = mid - 1;
        } else if (target > numbers[mid]) {
            start = mid + 1;
        } else {
            ans = mid;
            if(findFirstPosition) {
                end = mid - 1;
            } else  {
                start = mid + 1;
            }
        }
    }
    return ans;
}

console.log(findFirstAndLastPositionOfNumbers([1, 2, 3, 4, 4, 5, 6, 9], 10)) // output = 3;
console.log(findFirstAndLastPositionOfNumbers([1, 2, 3, 4, 4, 5, 6, 9], 4)) // output = 3;
console.log(findFirstAndLastPositionOfNumbers([1, 2, 3, 5, 6, 6, 9], 6)) // output = 5;
