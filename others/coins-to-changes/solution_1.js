/**
 * array will be sorted in descending order
 *
 * coins = [100, 50, 25, 10, 5, 2, 1];
 * value = 124
 *
 * return [100, 10, 10, 2, 2].
 */


function numberOfCoins(value, coins) {
    const totalCoins = [];
    for (let coin of coins) {
        let num = Math.floor(value / coin);
        if (num > 0) {
            for (let i = 0; i < num; i++) {
                totalCoins.push(coin)
            }
            value -= num * coin;
        }
    }

    return totalCoins;

}

const coins = [100, 50, 25, 10, 5, 2, 1];
console.log(numberOfCoins(124, coins))