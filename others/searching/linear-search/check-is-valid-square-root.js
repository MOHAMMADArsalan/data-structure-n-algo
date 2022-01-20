function checkIsValidSquareRoot(num) {
    for(let i = 1; i < num;i++) {
        if(i * i === num) return true;
    }

    return false;
}

function checkIsValidSquareRoot2(num) {
    if(num === 1) return true;
    let start = 0, end = num;
    while(start <= end) {
        let mid = Math.floor((start + end)  /  2);
        const square = mid * mid ;
        if(square === num) return true;
        else if(square >  num) end = mid - 1;
        else start = mid + 1;
    }
    return false;
}
console.log(checkIsValidSquareRoot2(16));
console.log(checkIsValidSquareRoot2(14));
console.log(checkIsValidSquareRoot2(8));
console.log(checkIsValidSquareRoot2(9));