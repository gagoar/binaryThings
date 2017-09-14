import draw from './drawTree';
import BinarySearchTree from '../BST/BST';

// const values = [2, 1, 3, 0, 4, -2, 5, -1];
// const node = new BinarySearchTree(values);

const node = new BinarySearchTree();

node.insert(10);
node.insert(5);
node.insert(15);
node.insert(0);
node.insert(7);
node.insert(6);

draw(node.getJSON());
