function factorial(n) {
    // base condition;
    if(n === 1) return 1;

    return n * factorial(n - 1);
}


console.log(factorial(5));