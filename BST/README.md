# BST: Binary Search Tree.

..* Is called Binary because every node (every element in the tree) can only have 2 nodes emerging *directly* from
it.

..* It's called *Tree* because the Resulting Data Structure looks like a tree
(singular root and branching out from its root as well)


..* A BST it's node base structure that follows certain rules in how these nodes are
added to the tree.

## Rules of a BST

0. First Rule:

... statement: For each node (node A), every value found in the left sub-tree of node A '<=' value found in node A.
... ex: if the value in node A is 5, the node B (that comes out of node A should be less or equal to 5. In other words node B([0-5]) <- node A(5). always assuming we are dealing with numbers between 0-9

0. Second Rule:
  statement: For each node (node A), every value found in the right sub-tree of node A is '>=' at the value found in node A.
  ex: if the value in node A is 5, the node C (that comes out of node A should be greater or equal to 5). In other words node A(5) -> node C ([5-9]). always assuming we are dealing with numbers between 0-9.



so far we have described just a B Tree, with 2 rules.  to make it
Searchable, what is missing are methods.  it comes with 4 main methods.

## insert(value): Accepts a value and places in the tree in the correct position.
contains(value): Accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
depthFirstLog(callback): Accepts a callback and executes it on every value contained in the tree.
and sometimes contains:
delete(value): Accepts a value and deletes that specific value within the BST.

