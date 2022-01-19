function findChar(str, target) {

    for(let char of str) {
        if(char === target) return char;
    }

    return "";
}


console.log(findChar('Arsalan', 'a'));
console.log(findChar('Helllo', 'z'));