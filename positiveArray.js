const numbers = [10, 4, 2, 9, 4, -4, 2, 4, -3];
function positiveArray(numbers){
    let newArray = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]<0){
            break;
        }
        newArray.push(numbers[i]);
    }
    return newArray;
}

const positiveNumbers = positiveArray(numbers);
console.log(positiveNumbers);