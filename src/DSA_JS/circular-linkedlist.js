function circular(list) {

    let fast = list.head;
    let slow = list.head;

    while(fast.next && fast.next.next){
           slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
                return true;
        }
    }
                return false;

    
}
