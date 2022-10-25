// A LINKED LIST IS JUST A COLLECTION OF NODES

// NODE
// STORES A PIECE OF DATA - VAL
// REFERENCE TO NEXT NODE - NEXT

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
