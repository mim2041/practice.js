function average(arr){
    var sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    return avg;
}

const arr = [9,4,7,1,3,2,5,6,8];
const findAverage = average(arr);
console.log(findAverage);