function capitalize(str=''){
    if(str.length!=0)
    {
        str=str[0].toUpperCase()+str.slice(1,str.length);
    }
    return str;

}

function reverseString(str=''){
    let rev='';
    for(let i=0;i<str.length;i++)
    {
        rev=str[i]+rev;
    }
    return rev;
}

const calculator = {
add: (a=0,b=0)=> a+b,
subtract: (a=0,b=0)=>a-b,
multiply: (a=0,b=0)=>a*b,
divide: (a=0,b=1)=>a/b
};


function checkCase(character){
    if(/^[a-z]$/.test(character))
        return 0;
    else if(/^[A-Z]$/.test(character))
        return 1;
    else
        return -1;
}

function caeserCipher(str='',key=0){
    let cipher='';
    for(let i=0;i<str.length;i++){
        let code=str.charCodeAt(i);

        switch (checkCase(str[i])) {
            case 0:
                {
                let a='a'.charCodeAt(0);
                code=code+key-a;
                code%=26;
                cipher+=String.fromCharCode(code+a);
                break;}
            case 1: 
                {
                let a='A'.charCodeAt(0);
                code=code+key-a;
                code%=26;
                cipher+=String.fromCharCode(code+a);
                break;}
                
            default:
                cipher+=str[i];
                break;
            }
    }
return cipher;
}


function analyzeArray(arr=[]){
let average = arr.reduce((total,val)=>total+val,0);
average/=arr.length;
const min = arr.reduce(
    (minimum,val)=>{
        return (minimum<val)?minimum:val;
    },
    arr[0]);
const max = arr.reduce(
    (maximum,val)=>{
        return (maximum>val)?maximum:val;
    },
    arr[0]);

const length = arr.length;

return {average,min,max,length};
}



export {capitalize,reverseString,calculator,caeserCipher,analyzeArray};