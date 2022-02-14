function sum(n) {
    if (n < 1) return n;

    return sum(Math.floor(n / 10)) + n % 10;
}

console.log(sum(1342));