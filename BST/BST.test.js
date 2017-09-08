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

  t.is(node.value, 1);
});

test('BST first node set value correctly when created', (t) => {
  let node = new BinarySearchTree(1);

  t.is(node.value, 1);
});

test('BST:insert:  first node, inserts right node correctly', (t) => {
  let node = new BinarySearchTree(2);

  node.insert(3);

  t.is(node.right.value, 3);
});

test('BST:insert first node, inserts left node correctly', (t) => {
  let node = new BinarySearchTree(2);

  node.insert(1);

  t.is(node.left.value, 1);
});

test('BST:insert a third value should we added to the left node', (t) => {
  let node = new BinarySearchTree(2);

  node.insert(1);
  node.insert(3);
  node.insert(0);

  t.is(node.left.left.value, 0);
});

test('BST:contains: values should be found in the tree', (t) => {
  let node = new BinarySearchTree(2);

  node.insert(1);
  node.insert(3);
  node.insert(0);

  t.true(node.contains(2));
  t.true(node.contains(1));
  t.true(node.contains(3));
});

test('BST:contains: value should not be found in the tree', (t) => {
  let node = new BinarySearchTree(2);

  node.insert(1);
  node.insert(3);
  node.insert(0);

  t.false(node.contains(5));
});

test.todo('depthFirstLog');
