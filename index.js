// Node class
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //append node
  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.size++;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
      this.size++;
    }
  }

  // prepend node
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  // size method
  nodeSize() {
    return this.size;
  }

  // headNode method
  headNode() {
    return this.head;
  }

  // tailNode method
  tailNode() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    return current;
  }

  // atIndex method
  atIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    } else {
      let current = this.head;
      let count = 0;

      while (current) {
        if (count === index) return current.value;
        current = current.next;
        count++;
      }
      return null;
    }
  }

  // pop method
  pop() {
    if (this.size === 1) {
      this.head = null;
      this.size = 0;
    } else {
      let current = this.head;
      let previous;

      while (current.next) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
      this.size--;
    }
  }

  // contains method
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  // find method
  find(value) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (current.value === value) return count;
      current = current.next;
      count++;
    }

    return null;
  }

  // toString method
  toString() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log(null);
  }

  // insertAt(index)
  insertAtIndex(data, index) {
    const node = new Node(data);

    if (index > 0 && index > this.size) return;
    if (index === 0) {
      this.head = new Node(data, this.head);
    } else {
      let current = this.head;
      let previous;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = node;
      node.next = current;
    }
  }

  // removeAtIndex
  removeAtIndex(index) {
    let current = this.head;
    let previous;
    let count = 0;

    if (index > 0 && index > this.size) return;
    if (index === 0) {
      this.head = current.next;
      this.size--;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = current.next;
    }
  }
}

const ll = new LinkedList();
