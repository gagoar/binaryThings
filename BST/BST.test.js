'use strict';

import test from 'ava';
import BinarySearchTree from './BST';

test('BST instance is a class of BinarySearchTree ', (t) => {
  let node = new BinarySearchTree(1);

  t.true(node instanceof BinarySearchTree);
});

test('BST instance has insert, contains', (t) => {
  let {insert, contains} = new BinarySearchTree(1);

  t.is(typeof insert, 'function');
  t.is(typeof contains, 'function');
});

test('BST first node set value correctly when created', (t) => {
  let node = new BinarySearchTree(1);

  t.is(node.getValue(), 1);
});

test('BST first node set value correctly when created', (t) => {
  let node = new BinarySearchTree(1);

  t.is(node.getValue(), 1);
});

test('BST:insert:  first node, inserts right node correctly', (t) => {
  let node = new BinarySearchTree(2);

  node.insert(3);
  t.is(node.getRight().getValue(), 3);
});

test('BST:insert first node, inserts left node correctly', (t) => {
  let node = new BinarySearchTree(2);

  node.insert(1);

  t.is(node.getLeft().getValue(), 1);
});

test('BST:insert a third value should we added to the left node', (t) => {
  let node = new BinarySearchTree(2);

  node.insert(1);
  node.insert(3);
  node.insert(0);

  t.is(node.getLeft().getLeft().getValue(), 0);
});


test('BST:constructor creates tree when array provided', (t) => {
  let node = new BinarySearchTree([2, 1, 3, 0]);

  t.is(node.getLeft().getLeft().getValue(), 0);
});

test('BST:contains: values should be found in the tree', (t) => {
  let node = new BinarySearchTree([2, 1, 3, 0]);

  t.true(node.contains(2));
  t.true(node.contains(1));
  t.true(node.contains(3));
});

test('BST:contains: value should not be found in the tree', (t) => {
  let node = new BinarySearchTree([2, 1, 3, 0]);

  t.false(node.contains(5));
});

test('BST:getChildrenArray: should be the correct schema', (t) => {
  let node = new BinarySearchTree([2, 1, 3, 0]);
  let content = [
    '2',
    '2.1',
    '2.1.0',
    '2.3',
  ];

  t.truthy(node.getChildrenArray(), content);
});


test('BST:getChildrenArray: should match a bigger schema', (t) => {
  let node = new BinarySearchTree([2, 1, 3, 0, 4, -2, 5, -1]);

  let content = [
    '2',
    '2.1',
    '2.1.0',
    '2.1.0.-2',
    '2.1.0.-2.-1',
    '2.3',
    '2.3.4',
    '2.3.4.5',
  ];

  t.truthy(node.getChildrenArray(), content);
});

test('BST:toCSV: should match a bigger schema', (t) => {
  let node = new BinarySearchTree([2, 1, 3, 0]);
  let content = 'id,value\n2.1,1\n2.1.0,1\n2.3,1';

  t.truthy(node.getCSV(), content);
});

test('BST:toJSON: should match a bigger schema', (t) => {
  let node = new BinarySearchTree([2, 1, 3, 0]);
  let content = {
    name: 2,
    children: [{
      name: 1,
      children: [{name: 0}],
    },
    {name: 3}],
  };

  t.truthy(node.getJSON(), content);
});

test('BST:getJSONWithParent: should match a bigger schema', (t) => {
  let node = new BinarySearchTree([2, 1, 3, 0]);
  let content = {
    name: 2,
    parent: null,
    children: [{
      name: 1,
      parent: 2,
      children: [{name: 0, parent: 1}],
    },
    {name: 3, parent: 2}],
  };

  t.truthy(node.getJSONWithParent(), content);
});
test('BST:getDepth should informe correctly the node\'s depth ', (t) => {
  let node = new BinarySearchTree();

  node.insert(3);
  node.insert(1);
  node.insert(0);

  t.is(node.getDepth(), 2);
  t.is(node.getLeft().getDepth(), 1);
  t.is(node.getRight().getDepth(), 1);
});

test('BST:AVL to balanced itself after inserts (left, left)', (t) => {
  let node = new BinarySearchTree();

  node.insert(3);
  node.insert(1);
  node.insert(0);

  t.is(node.getValue(), 1);
  t.is(node.getLeft().getValue(), 0);
  t.is(node.getRight().getValue(), 3);
});

test('BST:AVL to balanced itself after inserts (right, right)', (t) => {
  let node = new BinarySearchTree();

  node.insert(0);
  node.insert(1);
  node.insert(3);

  t.is(node.getValue(), 1);
  t.is(node.getLeft().getValue(), 0);
  t.is(node.getRight().getValue(), 3);
});


test('BST:AVL to balanced itself after inserts (right, left)', (t) => {
  let node = new BinarySearchTree();

  node.insert(0);
  node.insert(3);
  node.insert(1);

  t.is(node.getValue(), 1);
  t.is(node.getLeft().getValue(), 0);
  t.is(node.getRight().getValue(), 3);
});

test('BST:AVL to balanced itself after inserts (right, left)', (t) => {
  let node = new BinarySearchTree();

  node.insert(10);
  node.insert(5);
  node.insert(15);
  node.insert(0);
  node.insert(7);
  node.insert(6);

  t.is(node.getValue(), 7);
  t.is(node.getLeft().getValue(), 5);
  t.is(node.getRight().getValue(), 10);
  t.is(node.getLeft().getLeft().getValue(), 0);
  t.is(node.getLeft().getRight().getValue(), 6);
  t.is(node.getRight().getRight().getValue(), 15);
});
test.skip('BST:depthFirstLog should visit every node created in the tree', (t) => {


});
