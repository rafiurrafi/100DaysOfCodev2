class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
  }
}
var tree = new BinarySearchTree();
tree.root = new Node(10);
