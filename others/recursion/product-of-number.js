function product(n) {
    if(n < 10) return n ;
    return product(Math.floor(n / 10)) * (n % 10);
}

console.log(product(134254548742154))