function findNumberInRotateSortedArray(array, target) {
    const pivot = findPivot(array);
    let start = 0, end = array.length - 1;
    if(pivot !== -1) {
        end = pivot - 1;
    }
    const firstTry =  binarySearch(array, start , end, target);
    if(firstTry === -1) {
        return  binarySearch(array, pivot + 1 , array.length - 1, target);
    }
    return firstTry;
}

function binarySearch(array, start, end, target) {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (array[mid] === target) {
            return mid
        } else if (array[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
    return -1;
}

function findPivot(array) {
    let start = 0, end = array.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (array[mid] > array[mid - 1] && array[mid] > array[mid + 1]) {
            return mid;
        } else if (array[mid] > array[mid - 1]) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }

    return -1;

}


console.log(findNumberInRotateSortedArray([1,2, 3, 4, 5, 6, 7], 70))