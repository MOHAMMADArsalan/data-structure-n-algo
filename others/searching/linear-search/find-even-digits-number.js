function findEvenDigitsNumber(array) {
    let count = 0;

    for(let num of array) {
        if(even(Math.abs(num))) {
            count++;
        }
    }
    return count;
}


function even(num) {
    let count = 0;

    while(num > 0) {
        count++;
        num = Math.floor(num / 10);
    }

    return count > 0 && count % 2 === 0;
}

console.log(findEvenDigitsNumber([1,2,3,-22]))