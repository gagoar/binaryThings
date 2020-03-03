// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function reverse(list) {
  const reverse = [];
  for (let i = list.length - 1; i > -1; i--) {
    reverse.push(list[i]);
  }
  return reverse;
}

const addTwoNumbers = function(l1, l2) {
  const n = Number(reverse(l1).join(""));
  const m = Number(reverse(l2).join(""));

  debugger;
  const total = (n + m).toString().split("");
  return reverse(total);
};
