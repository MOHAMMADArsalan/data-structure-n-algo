/** 
 * 
 * [1,2,3,4,3,2,1]  = 4
 * 
*/

function findMountainInTheArray (arr) {
    let mountain = -1;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i -1] < arr[i] && arr[i] > arr[i + 1]) {
            mountain = i;
        }
    }

    return mountain;
}

console.log(findMountainInTheArray([1,2,3,4,3,2,1]))
console.log(findMountainInTheArray([1,2,3]))
console.log(findMountainInTheArray([1,2,3,7,5,2]))