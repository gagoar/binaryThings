class BinarySearchTree {
  constructor(value = null) {
    this.state = {
      // a value that can be compared aginst another BST values (ht or lt);
      value,
      // another BST where all the values are higher than (ht) the current value.
      right: null,
      // another BST where all the values are higher than the current value.
      left: null,
    };
  }

  insert(value) {
    if (this.getValue() > value) {
      this.getLeft()
        ? this.getLeft().insert(value)
        : this.setLeft(value);

    } else if (this.getValue() < value) {
      this.getRight()
        ? this.getRight().insert(value)
        : this.setRight(value);
    }
  }

  contains(value) {
    let found = false;

    if (this.getValue() > value) {
      found = this.getLeft()
        ? this.getLeft().contains(value)
        : false;

    } else if (this.getValue() < value) {
      found = this.getRight()
        ? this.getRight().contains(value)
        : false;
    }

    if (this.getValue() === value) {
      found = true;
    }

    return found;
  }

  setValue(value) {
    this.state.value = value;
  }

  getValue() {
    return this.state.value;
  }

  setRight(value) {
    this.state.right = new BinarySearchTree(value);
  }

  getRight() {
    return this.state.right;
  }

  setLeft(value) {
    this.state.left = new BinarySearchTree(value);
  }

  getLeft() {
    return this.state.left;
  }
}

module.exports = BinarySearchTree;
