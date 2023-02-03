const numbers = [12, 89, 44, 67, 88, 80, 12, 99, 100];
function find(numbers){
    let newArray = [];
    for(const number of numbers){
        if(number <= 80){
            continue;
        }
        newArray.push(number);
    }
    console.log(newArray);
}

find(numbers);