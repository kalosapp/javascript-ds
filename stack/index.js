/* Implementation of stack. Stack is a LIFO data structure. The stack
should be a class with methods 'push', 'pop', and
'peek'. Ex:
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.pop(); // returns 2
  s.pop(); // returns 1 */

class Stack {
  constructor() {
    this.data = [];
  }

  push(data) {
    this.data.push(data);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
module.exports = Stack;
