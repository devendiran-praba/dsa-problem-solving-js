class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(value) {
      const child = new Node(value);
      this.children.push(child);
      return child;
    }
  }
  
  const root = new Node(1);
  const node2 = root.addChild(2);
  const node3 = root.addChild(3);
  const node4 = node2.addChild(4);
  const node5 = node2.addChild(5);
  const node6 = node3.addChild(6);
  const node7 = node3.addChild(7);
  
  // Breadth-First Traversal
  function breadthFirstTraversal(root) {
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node.value);
      node.children.forEach(child => {
        queue.push(child);
      });
    }
  }
  
  console.log('Breadth-First Traversal:');
  breadthFirstTraversal(root);
  
  // Depth-First Traversal (Pre-order)
  function depthFirstTraversal(root) {
    console.log(root.value);
    root.children.forEach(child => {
      depthFirstTraversal(child);
    });
  }
  
  console.log('Depth-First Traversal (Pre-order):');
  depthFirstTraversal(root);
  