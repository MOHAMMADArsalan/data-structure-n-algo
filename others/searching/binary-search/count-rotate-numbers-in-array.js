function findCountRotatedNumberInArray(array) {
    const pivot = findPivot(array);
    return pivot +1;
}

function findPivot(array) {
    let start = 0, end = array.length - 1;

    while(start <= end) {
        const mid = Math.floor((start + end ) / 2);
        if(array[mid] > array[mid + 1]) {
            return mid;
        } else  if(array[mid] < array[mid - 1]) {
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
    return -1;
}

console.log(findCountRotatedNumberInArray([3,4,5,6,1,2])) // 3
console.log(findCountRotatedNumberInArray([3,4,5,1,2])) // 3
console.log(findCountRotatedNumberInArray([2,2,2,5,2,2]))
console.log(findCountRotatedNumberInArray([2,2,2,5,6,2,2]))
console.log(findCountRotatedNumberInArray([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,20,2,2]))