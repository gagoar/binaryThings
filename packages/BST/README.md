# BST: Binary Search Tree.

* It's called *Binary* because every node (every element in the tree) can only have 2 nodes emerging _directly_ from
it.
* It's called *Search* because implements 4 methods, that help to find elements inside such Structure.

* It's called *Tree* because the Resulting Data Structure looks like a tree
(singular root and branching out from its root as well)


* A BST it's node (or sometimes called leaf) base structure that follows certain rules in how these nodes (or leafts)  are
added to the tree.

## BST: the Rules.

0. First Rule:
 + statement: For each node (node A), every value found in the left sub-tree of node A '<=' value found in node A.
 + ex: if the value in node A is 5, the node B (that comes out of node A should be less or equal to 5. In other words node B([0-5]) <- node A(5). always assuming we are dealing with numbers between 0-9

0. Second Rule:
 + statement: For each node (node A), every value found in the right sub-tree of node A is '>=' at the value found in node A.
 + ex: if the value in node A is 5, the node C (that comes out of node A should be greater or equal to 5). In other words node A(5) -> node C ([5-9]). always assuming we are dealing with numbers between 0-9.
--------------------------------------

So far we have described just a Binary Tree, with _2 rules_.
To make it searchable, what is missing are methods.

### Insert (`insert(value)`):

Accepts a value and places in the tree in the correct position.

### Contains (`contains(value)`):

Accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.

### Depth First Log (`depthFirstLog(callback)`):

Accepts a callback and executes it on every value contained in the tree.

### Delete (`delete(value)`):

Accepts a value and deletes that specific value within the BST. (_not essential to Make a tree searchable_)  
