// function anagrams(stringA, stringB) {
//     console.log(stringA)
//         console.log(stringB)

//   return cleanString(stringA) === cleanString(stringB)
    
// }

// const cleanString = (str) => {
//     return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
// };

const cleanObject = (str) => {
    let value = str.replace(/[^\w]/g, '').toLowerCase();
    let charCount = {};
    for (let chr of value) {
      charCount[chr] = (charCount[chr] || 0) + 1;
    }
    return charCount;
  };
  
  function anagrams(stringA, stringB) {
    let charA = cleanObject(stringA);
    let charB = cleanObject(stringB);
  
    if (Object.keys(charB).length !== Object.keys(charA).length) {
      return false;
    }
  
    for (let [charValue, count] of Object.entries(charB)) {
      if (charB[charValue] !== charA[charValue]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test the function with examples
  console.log(anagrams('listen', 'silent')); // Output: true (anagrams)
  console.log(anagrams('hello', 'world')); // Output: false (not anagrams)
  