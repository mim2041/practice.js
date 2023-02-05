function digitCount(number){
    let sum = 0;
    i=0;
    while(number >= 1){
        let rem = number % 10;
        sum = sum + rem;
        number = Math.floor(number/10);
    }
    return sum;
}

const number = 128;
const digitSum = digitCount(number);
console.log("sum of the digits is ",digitSum);