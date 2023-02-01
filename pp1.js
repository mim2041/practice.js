function arrayMax(arr){
    var max=arr[0];
    for(let i=0; i<arr.length; i++){
        if(max <= arr[i]){
            max = arr[i];
        }
    }
    return max;
}

const arr = [12, 54, 34, 23, 56, 34, 23];
const maxArray = arrayMax(arr);
console.log("Max:", maxArray);