function weave(sourceOne, sourceTwo) {
    const result = [];
    
    while (sourceOne.length > 0 || sourceTwo.length > 0) {
        if (sourceOne.length > 0) {
            result.push(sourceOne.shift());
        }
        
        if (sourceTwo.length > 0) {
            result.push(sourceTwo.shift());
        }
    } 
    
    return result;
}

const sourceOne = [1, 3, 5];
const sourceTwo = [2, 4, 6];
console.log(weave(sourceOne, sourceTwo)); // Output: [1, 2, 3, 4, 5, 6]


// function weave(sourceOne, sourceTwo) {
//     const q = new Queue();
    
//     while(sourceOne.peek() || sourceTwo.peek()){
//         if(sourceOne.peek()){
//             q.add(sourceOne.remove())
//         }
        
//          if(sourceTwo.peek()){
//             q.add(sourceTwo.remove())
//         }
//     } 
    
//     return q;
// }

// // You should not need to make any changes to this class
// class Queue {
//   constructor() {
//     this.data = [];
//   }

//   add(record) {
//     this.data.unshift(record);
//   }

//   remove() {
//     return this.data.pop();
//   }

//   peek() {
//     return this.data[this.data.length - 1];
//   }
// }