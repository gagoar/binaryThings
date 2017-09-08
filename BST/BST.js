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
    if(this.value > value) {
      this.left
        ? this.left.insert(value)
        : (this.left = value);

    } else if (this.value < value) {
      this.right
        ? this.right.insert(value)
        : (this.right = value);
    }
  }

  contains(value) {
    let found = false;

    if(this.value > value) {
      found = this.left
        ? this.left.contains(value)
        : false;

    } else if (this.value < value) {
      found = this.right
        ? this.right.contains(value)
        : false;
    }

    if (this.value === value) {
      found = true;
    }

    return found;
  }

  set value(value) {
    this.state.value = value;
  }

  get value() {
    return this.state.value;
  }

  set right(value) {
    this.state.right = new BinarySearchTree(value);
  }

  get right() {
    return this.state.right;
  }

  set left(value) {
    this.state.left = new BinarySearchTree(value);
  }

  get left() {
    return this.state.left;
  }
}

module.exports = BinarySearchTree;
