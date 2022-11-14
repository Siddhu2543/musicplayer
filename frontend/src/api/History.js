// on press link
// // add current page to stack_back

// on press back
// // add current page to stack_for
// // redirect to - stack_back top
// // pop stack_back

// on press for
// // add current page to stack_back
// // redirect to - stack_for top
// // pop stack_for

class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(elem) {
    this.items.push(elem);
  }

  pop() {
    if (this.isEmpty()) return "Empty";
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return "Empty";
    return this.items[this.items.length - 1];
  }

  print() {
    return this.items.join(", ");
  }
}

export default Stack;
