

const coins = [];

const nonConstructableChange = function (coins) {

    let currentChangeCreated = 0;

    coins.sort((a, b) => a - b);

    for (let coin of coins) {
        if (coin > currentChangeCreated + 1) {
            return currentChangeCreated + 1;
        }

        currentChangeCreated += coin;
    }

    return currentChangeCreated + 1;

}



console.log(nonConstructableChange(coins));