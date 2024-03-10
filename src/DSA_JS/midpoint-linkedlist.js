function midpoint(list) {
  console.log(JSON.stringify(list));

  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}


let data = {"head":{"data":"a","next":{"data":"b","next":{"data":"c","next":{"data":"d","next":{"data":"e","next":null}}}}}};