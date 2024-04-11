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

export {capitalize,reverseString,calculator};