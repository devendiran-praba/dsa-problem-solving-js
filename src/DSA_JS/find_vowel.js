function vowels(str) {
    let lowCase = str.toLowerCase();
        let vowelCount = 0;

    for(let charValue of lowCase){
        
        if(charValue === 'a' || charValue === 'e' || charValue === 'i' || charValue === 'o' || charValue === 'u')
        {
            vowelCount++;
        }
        
    }
    
    return vowelCount;
    
}
