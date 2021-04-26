/* Implementation of linkedlist in javascript */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    if (!this.head) return 0;

    let counter = 0;
    let node = this.head;
    while (node) {
      node = node.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let cur = this.head.next;

    while (cur.next) {
      cur = cur.next;
      prev = prev.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    if (!this.head.next) {
      this.head.next = node;
      return;
    }

    let prev = this.head;
    let cur = this.head.next;

    while (cur.next) {
      cur = cur.next;
      prev = prev.next;
    }
    cur.next = node;
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prev = this.head;
    let cur = this.head.next;
    let counter = 1;

    while (cur) {
      if (counter === index) {
        prev.next = cur.next;
        return;
      }
      cur = cur.next;
      prev = prev.next;
      counter++;
    }
    return null;
  }

  insertAt(data, index) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let prev = this.head;
    let cur = this.head.next;
    let counter = 1;

    while (cur) {
      if (counter === index) {
        prev.next = node;
        node.next = cur;
        return;
      }
      cur = cur.next;
      prev = prev.next;
      counter++;
    }
    prev.next = node;
    return;
  }

  forEach(fn) {
    if (!this.head) {
      return;
    }
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = {
  Node,
  LinkedList
};
