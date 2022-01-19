function searchInRange (arr, target, start = 0, end = arr.length) {
    if(arr.length === 0) return undefined;

    for(let  i = start; i < end; i++) {
        if(arr[i] === target) return arr[i];
    }

    return undefined;
}
const arr = [1,2,56,7,89,4,33,5,233];

console.log(searchInRange(arr, 7, 1, 5));
console.log(searchInRange(arr, 100, 2, arr.length));