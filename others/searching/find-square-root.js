function findSquareRoot (num) {
    if(num == 0) return 0;
    if(num == 1) return 1;

    let low = 1;
    let high = num;

    while(true) {
        let mid = (low + high) / 2;
        let midSquare = Math.floor(mid * mid)
        if(midSquare === num) {
            return Math.floor(mid);
        } else if(midSquare > num){
            high = mid
        } else {
            low = mid;
        }
    }

}

console.log(findSquareRoot(8));
console.log(findSquareRoot(9));
console.log(findSquareRoot(16));