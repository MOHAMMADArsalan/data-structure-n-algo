function arrangeCoins (num) {
    let stair = 0;

    while(num > 0) {
        let newStart = stair + 1;
        if(newStart <= num) {
            ++stair;
        }

        num -= newStart;
    }

    return stair;
}

console.log(arrangeCoins(1))
console.log(arrangeCoins(2))
console.log(arrangeCoins(3))
console.log(arrangeCoins(4))
console.log(arrangeCoins(5))
console.log(arrangeCoins(6))