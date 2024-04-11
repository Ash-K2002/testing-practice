function capitalize(str=''){
    if(str.length!=0)
    {
        str=str[0].toUpperCase()+str.slice(1,str.length);
    }
    return str;

}

export {capitalize};