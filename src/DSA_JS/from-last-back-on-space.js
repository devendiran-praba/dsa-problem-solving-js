function fromLast(list, n) {
    let fast = list.head;
    let slow = list.head;
    
    while(n>0){
        fast= fast.next;
        n--;
    }
    
    while(fast.next){
      fast = fast.next;
      slow = slow.next;
    }

    return slow;
}
