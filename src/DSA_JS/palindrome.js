function palindrome(str) {
    // console.log(typeof str)
    //     let template = str.split('').reverse((r,c)=>c+r,'').join('');
      
    //     return template == str;
    
    return str.split('').every((char,i)=>{
        return char === str[str.length -i-1]
    })
    
}