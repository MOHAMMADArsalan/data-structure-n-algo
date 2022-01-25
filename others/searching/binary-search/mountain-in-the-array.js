/** 
 * 
 * [1,2,3,4,3,2,1]  = 4
 * 
*/

function findMountainInTheArray (arr) {
    let start = 0, end = arr.length - 1;

    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        if(arr[mid] < arr[mid + 1]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }
    return start;
}

console.log(findMountainInTheArray([1,2,3,4,3,2,1]))
console.log(findMountainInTheArray([1,2]))
console.log(findMountainInTheArray([1,2,3,7,5,2]))