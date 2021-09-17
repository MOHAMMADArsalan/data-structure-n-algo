/**
 * input = [-1,-5,-10,-20,-30,-50,-100]
 * 
 * output true;
 */




const isMonotonic = (array) => {
    if(array.length <= 1) return true;
    // checking is array acsending  or descending
    const isUpword = array[0] < array[array.length - 1];

    let previousNum = array[0];

    for(let i = 1; i < array.length; i++) {
        if(isUpword) {
            if(previousNum > array[i]) return false;
        } else {
            if(previousNum < array[i]) return false;
        }
    }

    return true;
}

console.log(isMonotonic([-1,-5,-10,-20,-30,-50,-100, 10]))
console.log(isMonotonic([-1,-5,-10,-20,-30,-50,-100]))
console.log(isMonotonic([1,5,10,20,30,50,100]))