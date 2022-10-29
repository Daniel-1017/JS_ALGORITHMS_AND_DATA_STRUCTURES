class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }
}

const BST = new BinarySearchTree();
