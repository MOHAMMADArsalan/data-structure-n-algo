function findMaxItem  (arr) {
    if(arr.length === 0) return null;

    let max = Number.MIN_SAFE_INTEGER;
    for(let num of arr) {
        max  = Math.max(max, num);
    }
    return max;
}

console.log(findMaxItem([1,2,3,45,6,-1]));
console.log(findMaxItem([102,3,4,1]));