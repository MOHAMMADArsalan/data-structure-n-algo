function findNumberInInfinityNumbers(arr, target) {
    let start = 0, end = 1;
    while (target > arr[end]) {
        const newStart = end + 1;
        end = end + (end - start + 1) * 2;
        start = newStart;
    }
    const ans = findNumber(arr, start, end, target)
    return ans;
}

function findNumber(arr, start, end, target) {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return arr[mid];
        else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

const arr = [];
for (let i = 0; i < 100000; i++) {
    arr.push(i + 1);
}
console.log(findNumberInInfinityNumbers(arr, 9000))