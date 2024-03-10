// function fib(n) {
//     if (n <= 1) {
//        return n;
//      } else {
//         // console.log('1',fib(n-1) )
//         // console.log('2',fib(n-2) )
//         console.log('32',fib(n - 1) + fib(n - 2) )

//        return fib(n - 1) + fib(n - 2);
//      }
       
//    }
   

// console.log(fib(4))


// function fibonacci(n){

//     if(n<=1) return n;
    
//     let prev = 0;
//     let curr = 1;
//     let next;
//     let i=1;
    
//     while(i<n){
//        next= prev+curr;
//         prev = curr;
//         curr = next
//         i++;
//     }
    
//     return curr;
//     }
    
    
    
    
    
    
    
    
    

function fibonacci(n) {
   if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
   }

function fib(fn){
   let cache = {};
   
   return (...args) => {
      console.log('cache',cache)

       let result;
       if(args.toString() in cache){
         console.log('cache',cache)
           return cache[args.toString()]
       }
       
       result = fn(...args);
       cache[args.toString()] = result;
       return result;
       
   }
   
}


const test = fib(fibonacci)

console.log(test(4))

    
    

// function memoize(fn) {
//    const cache = new Map();
   
//    return function(...args) {
//      const key = args.toString();
     
//      if (cache.has(key)) {
//        return cache.get(key);
//      }
     
//      const result = fn(...args);
//      cache.set(key, result);
//      return result;
//    };
//  }
 
//   function fibonacci(n) {
//    if (n <= 1) {
//       return n;
//     } else {
//       return fibonacci(n - 1) + fibonacci(n - 2);
//     }
//    }
    
//  function expensiveOperation(n) {
//    console.log(`Calculating for ${n}`);
//    return n * 2;
//  }
 
//  const memoizedOperation = memoize(expensiveOperation);
 
//  console.log(memoizedOperation(5)); // Calculates and returns 10
//  console.log(memoizedOperation(5)); // Returns cached result 10 without recalculating
//  console.log(memoizedOperation(10)); // Calculates and returns 20
//  console.log(memoizedOperation(10)); // Returns cached result 20 without recalculating
 
    
    
    
    
    
    
    
    
    
    
    
    
    