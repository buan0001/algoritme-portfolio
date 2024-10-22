export default class Queue {
  head = null;
  tail = null;

  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }

  [Symbol.iterator]() {
    let current = this.tail;

    return {
      next: () => {
        if (current) {
          const returnVal = current;
          current = current.next;
          return { value: returnVal, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }

  // Add new elements to tail
  enqueue(data) {
    const newNode = new Node(data);
    if (this.tail) {
      // Make every node point backwards
      this.tail.next = newNode;
    }
    // Before setting the new node as tail
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  // Remove elements from head
  dequeue() {
    if (!this.head) {
      return;
    }
    let temp = this.head.data;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  peek() {
    return this.head;
  }

  get(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (!current) {
        return;
      }
      current = current.next;
    }
    return current;
  }


  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    console.log("count", count);
    return count;
  }
  dumpList() {
    let current = this.head;
    let printString = "";
    while (current) {
      // console.log(current.data);
      printString += `${current.data} `;
      current = current.next;
    }
    console.log(printString);
    return printString;
  }
}

class Node {
  data = null;
  next = null;
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }

  setNext(newNext) {
    this.next = newNext;
  }
}
