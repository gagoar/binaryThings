import draw from './drawTree';
import BinarySearchTree from '../BST/BST';

const values = [2, 1, 3, 0, 4, -2, 5, -1];
const node = new BinarySearchTree(values);

draw(node.getJSON());
