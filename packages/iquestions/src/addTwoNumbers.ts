// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

type LinkedList = {
  val: number,
  next?: LinkedList
};

const attachToNext = (list: LinkedList, attach: LinkedList): LinkedList => {
  return list.next ? { val: list.val, next: attachToNext(list.next, attach) } : { val: list.val, next: attach }
}
export const getLinkedList = (arr: number[]): LinkedList => {
  return arr.reduce<LinkedList>((memo, n) => {
    return memo.val === -1 ? { val: n, next: undefined } : attachToNext(memo, { val: n, next: undefined })
  }, { val: -1 })

};
export const getValuesFromLinkedList = (list: LinkedList): number[] => {
  return list.next ? [list.val, ...getValuesFromLinkedList(list.next)] : [list.val];
};

export const addTwoNumbers = function (l1: LinkedList, l2: LinkedList): LinkedList {

  const list1 = getValuesFromLinkedList(l1);
  const list2 = getValuesFromLinkedList(l2);

  const bigList = list1.length >= list2.length ? list1 : list2;

  const smallList = list1 === bigList ? list2 : list1;
  const arrResult = bigList.reduce<{ addedUp: number[], carry: 1 | 0 }>((result, valueA, index) => {

    const valueB = (smallList[index] || 0) + result.carry;
    const value = valueA + valueB;

    const carry = value >= 10 ? 1 : 0;

    result.addedUp[index] = carry ? value - 10 : value;
    result.carry = carry;

    return result;

  }, { addedUp: [], carry: 0 });

  if (arrResult.carry) {
    arrResult.addedUp = [...arrResult.addedUp, 1];
  }

  console.log(arrResult.addedUp)
  return getLinkedList(arrResult.addedUp);
};
