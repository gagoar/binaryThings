import draw from './drawTree';
import BinarySearchTree from '../BST/BST';

const node = new BinarySearchTree([2, 1, 3, 0]);

const treeData = {
  'name': 'Top Level',
  'children': [
    {
      'name': 'Level 2: A',
      'children': [
        {'name': 'Son of A'},
        {'name': 'Daughter of A'},
      ],
    },
    {'name': 'Level 2: B'},
  ],
};

draw(node.getJSON());

// draw(treeData);
