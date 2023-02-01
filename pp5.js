function secondLargest(arr){
    var newArray = [];
    var element = arr[0];
    const n = arr.length;
    var temp;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i]>=arr[j]){
                temp = arr[i];
                arr [i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr[n-2]);
}

const array = [5,7,4,5,3,9,8];
secondLargest(array);