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

export {capitalize,reverseString};