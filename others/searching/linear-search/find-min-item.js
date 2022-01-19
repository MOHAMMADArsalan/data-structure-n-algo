function findMinItem (arr) {
    if(arr.length === 0) return null;

    let min = Number.MAX_SAFE_INTEGER;
    for(let num of arr) {
        min = Math.min(min, num);
    }
    return min;
}

console.log(findMinItem([1,2,3,45,6,-1]));
console.log(findMinItem([102,3,4,1]));