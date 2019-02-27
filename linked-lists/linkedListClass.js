//class for linkedList

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    for (let val of vals) {
      this.push(val);
    }
  }
  //return node at specified index
  _get(idx) {
    let curr = this.head;
    let count = 0;
    while (curr !== null && count !== idx) {
      curr = curr.next;
      count++;
    }
    return curr;
  }

  //add new node to end of list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  //add new node to beginning of list
  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.length === 0) this.tail = this.head;

    this.length++;
  }

  // remvove last node from list
  pop() {
    this.delete(this.length - 1);
  }

  //remove first node from list
  shift() {
    this.delete(0);
  }

  //find node at specified idx and return node.val
  find(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index.');
    }
    let node = this._get(idx);
    return node.val;
  }

  //set value of node
  setVal(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index.');
    }
    let node = this._get(idx);
    node.val = val;
  }

  insert(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index');
    }
    if (idx === 0) {
      return this.unshift(val);
    }
    if (idx === this.length) {
      return this.push(val);
    }
    let previous = this._get(idx - 1);
    let newNode = new Node(val);
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
  }
  delete(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index');
    }
    //delete head
    if (idx == 0) {
      let valToDelete = this.head.val;
      this.head = this.head.next;
      this.length--;
      if (this.length < 2) this.tail = this.head;
      //return value deleted
      return valToDelete;
    }

    let previous = this._get(idx - 1);
    //delete tail
    if (idx === this.length - 1) {
      let valToDelete = previous.next.val;
      previous.next = null;
      this.tail = previous;
      this.length--;
      return valToDelete;
    }

    let valToDelete = previous.next.val;
    previous.next = previous.next.next;
    this.length--;
    return valToDelete;
  }
}
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = LinkedList;
