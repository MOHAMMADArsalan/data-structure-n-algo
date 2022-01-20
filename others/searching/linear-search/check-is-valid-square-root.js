function checkIsValidSquareRoot(num) {
    for(let i = 1; i < num;i++) {
        if(i * i === num) return true;
    }

    return false;
}

console.log(checkIsValidSquareRoot(16));
console.log(checkIsValidSquareRoot(14));
console.log(checkIsValidSquareRoot(8));
console.log(checkIsValidSquareRoot(9));