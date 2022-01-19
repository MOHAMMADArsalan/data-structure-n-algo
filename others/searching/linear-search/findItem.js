function findItem (arr, target) {
    for(let elem of arr) {
        if(elem === target) return elem;
    }

    return undefined;
}

const arr = [1,2,56,7,89,4,33,5,233];
console.log(findItem(arr, 2));
console.log(findItem(arr, 200));
console.log(findItem([], 200));