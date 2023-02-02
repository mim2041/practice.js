function isPrime(number){
    for(i=2; i<number; i++){
        if(number%i==0){
            return false;
        }
        return true;
    }
}

const number = 11;
const is_prime = isPrime(number);
console.log('Prime number',is_prime);