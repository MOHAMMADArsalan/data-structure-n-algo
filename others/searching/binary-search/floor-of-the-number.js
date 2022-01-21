function floorOfTheNumber (numbers, target) {
    let start  = 0 , end = numbers.length - 1;

    while(start <= end) {
        const mid  = Math.floor((start + end) / 2);
        if(numbers[mid] === target) return numbers[mid];
        else if(numbers[mid] > target) {
            end = mid - 1;
        }  else {
            start  = mid + 1;
        }
    }
    return numbers[end];
}

console.log(floorOfTheNumber([1,2,3,5,6,9], 4)) // output = 3;
console.log(floorOfTheNumber([1,2,3,5,6,9], 5)) // output = 5;