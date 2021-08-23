/**
 * array = [2,1,2,2,2,3,4,2]
 * toMove = 2
 */


function moveElementToEnd(array, toMove) {

    let left = 0;
    let right = array.length - 1;

    while(left < right) {
        if(array[right] === toMove) {
            right--;
        } else if(array[left] === toMove) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        } else {
            left++;
        }
    }

    return array;
}

console.log(moveElementToEnd([2,1,2,2,2,3,4,2], 1))