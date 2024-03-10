function capitalize(str) {
    let value = str[0].toUpperCase();
    
    for(let i=1;i<str.length; i++){
        if(str[i-1] === ' '){
          value+=str[i].toUpperCase()
        }else{
            value+=str[i]
        }
    }
    
    console.log(str)
    return value;
    
    
}
