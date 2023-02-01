function maxNumber(a,b,c){
    if((a>=b) && (a>=c)){
        console.log("Largest number is",a);
    }
    else if((b>=a) && (b>=c)){
        console.log("Largest number is",b);
    }
    else{
        console.log("Largest number is",c);
    }
}

maxNumber(4,2,4);