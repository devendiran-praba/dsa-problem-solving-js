const value = {
  data: 0,
  children: [
    { data: 1, children: [{ data: 4, children: [] }] },
    { data: 2, children: [] },
    { data: 3, children: [{ data: 5, children: [] }] },
  ],
};

function maxWidthBF(root) {
        let arr = [root, "s"];
        let count = [0];
        while (arr.length > 1) { // Changed the condition to stop when only "s" is left in the queue
          let test = arr.shift();
          if (test === "s") {
            count.push(0);
            arr.push("s");
          } else {
            arr.push(...test.children);
            count[count.length - 1]++;
          }
        }
      
        return count;
      }
      

console.log(maxWidthBF(value));
