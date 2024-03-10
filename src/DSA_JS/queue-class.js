class Queue {
    constructor() {
        this.data = [];
        
    }
    
    add(record){
        return this.data.unshift(record);
    }
    
     remove(){
        return this.data.pop();
    }
}



const q = new Queue();
q.add(1);
q.remove(); // returns 1;



// function createQueue() {
//     const data = [];

//     function add(record) {
//         return data.unshift(record);
//     }

//     function remove() {
//         return data.pop();
//     }

//     return {
//         add,
//         remove
//     };
// }

// const q = createQueue();
// q.add(1);
// console.log(q.remove()); // returns 1
