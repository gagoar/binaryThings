// const _optimizeInput = (nodes) => {
//   let values = nodes.slice();
//   let median;
//
//   values.sort((a, b) => a - b);
//   let half = Math.floor(values.length / 2);
//
//   if(values.length % 2) {
//     median = values[half];
//   } else {
//     median = (values[half - 1] + values[half]) / 2.0;
//   }
//
// }

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
    };

    if (nodes.length) {
      nodes.map(this.insert.bind(this));
    }
  }

  /*
  if ($new->getKey() <= $root->getKey()) {
			if ($root->getLeft() == null) {
				$root->setLeft($new);
				$new->setParent($root);
			} else {
				$this->_insert($new, $root->getLeft());
			}
		} else {
			if ($root->getRight() == null) {
				$root->setRight($new);
				$new->setParent($root);
			} else {
				$this->_insert($new, $root->getRight());
			}
		}
  */
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
  minDepth() {
    // in any case, if we have at least the first node, we have depth = 1,
    // in order to do this without stricklty checking that nothing is 0 (because it would give depth as 0 always),
    // we set both to right/left 1, and Math.min does the rest. :)

    if (!this.getLeft() && !this.getRight()) {
      return 1;
    }

    if (!this.getLeft()) {
      return this.getRight().minDepth() + 1;
    }

    if (!this.getRight()) {
      return this.getLeft().minDepth() + 1;
    }

    return Math.min(this.getRight().minDepth(), this.getLeft().minDepth());
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
  setValue(value) {
    this.state.value = value;
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
