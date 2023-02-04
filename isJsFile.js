function isJavaScriptFile(str){
    if(str.endsWith('.js')){
        return true
    }
    else{
        return false;
    }
}

const str = 'js.png';
const isJSFile = isJavaScriptFile(str);
console.log(isJSFile);