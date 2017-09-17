const CSV_HEADER = 'name,parent';

const _flatten = (list) => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? _flatten(b) : b),
  []
);

class BinarySearchTree {
  constructor(node = null) {
    let nodes = node;

    if (!Array.isArray(nodes)) {
      nodes = [node];
    }
    this.state = {
      // a value that can be compared aginst another BST values (ht or lt);
      value: nodes.shift(),
      // another BST where all the values are higher than (ht) the current value.
      right: null,
      // another BST where all the values are higher than the current value.
      left: null,
      depth: 1,
    };

    if (nodes.length) {
      nodes.map(this.insert.bind(this));
    }
  }

  insert(value) {
    if (this.getValue() === null) {
      this.setValue(value);
      return;
    }

    if (this.getValue() > value) {
      this.getLeft()
        ? this.getLeft().insert(value)
        : this.setLeft(new BinarySearchTree(value));

    } else if (this.getValue() < value) {
      this.getRight()
        ? this.getRight().insert(value)
        : this.setRight(new BinarySearchTree(value));
    }

    let rightDepth = this.getRight() ? this.getRight().getDepth() : 0;
    let leftDepth = this.getLeft() ? this.getLeft().getDepth() : 0;

    if (Math.abs(rightDepth - leftDepth) > 1) {
      this.balance();
    }

    this.calcDepth();
  }

  balance() {
    let rightDepth = this.getRight() ? this.getRight().getDepth() : 0;
    let leftDepth = this.getLeft() ? this.getLeft().getDepth() : 0;
    let rightChildDepth;
    let leftChildDepth;

    if (rightDepth > leftDepth) {
      // right
      let rightNode = this.getRight();

      rightChildDepth = rightNode.getRight() ? rightNode.getRight().getDepth() : 0;
      leftChildDepth = rightNode.getLeft() ? rightNode.getLeft().getDepth() : 0;

      if (leftChildDepth > rightChildDepth) {
        this.getRight().balanceRight();
        this.balanceLeft();
      } else {
        this.balanceLeft();
      }


    } else {
      //left
      let leftNode = this.getLeft();

      rightChildDepth = leftNode.getRight() ? leftNode.getRight().getDepth() : 0;
      leftChildDepth = leftNode.getLeft() ? leftNode.getLeft().getDepth() : 0;

      if (leftChildDepth > rightChildDepth) {
        this.balanceRight();
      } else {
        this.getLeft().balanceLeft();
        this.balanceRight();
      }
    }

  }
  balanceRight() {
    let leftChild = this.getLeft();
    let newNode = new BinarySearchTree(this.getValue());

    newNode.setLeft(leftChild.getRight());
    newNode.setRight(this.getRight());

    this.setValue(leftChild.getValue());
    this.setRight(newNode);
    this.setLeft(leftChild.getLeft());
  }
  balanceLeft() {
    let rightChild = this.getRight();
    let newNode = new BinarySearchTree(this.getValue());

    newNode.setRight(rightChild.getLeft());
    newNode.setLeft(this.getLeft());

    this.setValue(rightChild.getValue());
    this.setLeft(newNode);
    this.setRight(rightChild.getRight());
  }

  getDepth() {
    return this.state.depth;
  }
  setDepth(value = 1) {
    this.state.depth = value;
  }

  calcDepth() {
    let rightDepth = this.getRight() ? this.getRight().getDepth() : 0;
    let leftDepth = this.getLeft() ? this.getLeft().getDepth() : 0;

    this.setDepth(
      1 + Math.max(
        rightDepth,
        leftDepth,
      )
    );
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
  getChildrenArray(root = `${this.getValue()}`) {

    let content = [root];

    if (this.getLeft()) {
      let left = `${root}.${this.getLeft().getValue()}`;
      let leftChildren = this.getLeft().getChildrenArray(left);

      content.push(leftChildren);
    }

    if (this.getRight()) {
      let right = `${root}.${this.getRight().getValue()}`;
      let rightChildren = this.getRight().getChildrenArray(right);

      content.push(rightChildren);
    }

    return _flatten(content);
  }

  getCSV() {
    return this.getChildrenArray().reduce(
      (csvContent, value) => (
        String.raw `${csvContent}\n${value},1`
      ), CSV_HEADER);
  }

  getJSON() {
    let children = [];

    if (this.getLeft()) {
      children.push(this.getLeft().getJSON());
    }

    if (this.getRight()) {
      children.push(this.getRight().getJSON());
    }

    return {name: this.getValue(), children};
  }

  getJSONWithParent(parent = 'null') {
    let children = [];

    if (this.getLeft()) {
      children.push(this.getLeft().getJSONWithParent(this.getValue()));
    }

    if (this.getRight()) {
      children.push(this.getRight().getJSONWithParent(this.getValue()));
    }

    return {name: this.getValue(), parent, children};
  }
  setValue(value) {
    this.state.value = value;
  }

  getValue() {
    return this.state.value;
  }

  setRight(node) {
    this.state.right = node;
    this.calcDepth();
  }

  getRight() {
    return this.state.right;
  }

  setLeft(node) {
    this.state.left = node;
    this.calcDepth();
  }

  getLeft() {
    return this.state.left;
  }
}

module.exports = BinarySearchTree;
