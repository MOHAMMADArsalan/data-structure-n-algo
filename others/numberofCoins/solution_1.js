/**
 * array will be sorted in descending order
 *
 * coins = [100, 50, 25, 10, 5, 2, 1];
 * value = 125
 *
 * return number of coins used.
 */


function numberOfCoins(value, coins) {
    let numberOfCoins = 0;

    for (let num of coins) {
        let val = Math.floor(value / num);
        if(val > 0) {
            numberOfCoins += val;
            val = val * num;
            value -= val;
        }
    }

    return numberOfCoins;

}

const coins = [100, 50, 25, 5, 2, 1];
console.log(numberOfCoins(10000, coins))