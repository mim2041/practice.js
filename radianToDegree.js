function radianToDegree(radian){
    const degree = (180/3.1416) * radian;
    return degree.toFixed(2);
}

const myDegree = radianToDegree(25);
console.log(myDegree);