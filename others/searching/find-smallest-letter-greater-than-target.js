function findSmallesLetterGreaterThanTarget(arr, target) {
    let start = 0, end = arr.length - 1;

    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        if(arr[mid] > target) {
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }

    return arr[start % arr.length];
}

console.log(findSmallesLetterGreaterThanTarget(["c","f", "j"], "c"))
console.log(findSmallesLetterGreaterThanTarget(["e","e","e","e","e","e","n","n","n","n"], "e"))
console.log(findSmallesLetterGreaterThanTarget(["c","f", "g"], "f"))
console.log(findSmallesLetterGreaterThanTarget(["a", "b"], "z"))