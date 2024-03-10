function maxChar(str) {
    let charCount = {};
    let maxChar = '';
    let maxCount = 0;
  
    str.split('').forEach((i,k) =>{
        if(charCount[i]){
            charCount[i]++;
        }else{
            charCount[i]=1;
        }
    })
    
   let value = Object.entries(charCount);
   value.forEach(([key,value],k)=>{
           if(maxCount < charCount[key]){
            maxCount = value;
            maxChar = key;
  
        }
   })
   
   return maxChar
  
  
  }
  
  // Test the function
  console.log(maxChar('Hello')); // Output: 'l'
  console.log(maxChar('abracadabra')); // Output: 'a'
  