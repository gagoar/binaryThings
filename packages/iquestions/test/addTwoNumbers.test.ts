import { addTwoNumbers, getLinkedList, getValuesFromLinkedList } from '../src/addTwoNumbers';

describe('twoSum', () => {
  it('should add Two Numbers', () => {
    const input1 = {
      val: 2, next: {
        val: 4,
        next: {
          val: 3
        }
      }
    }
    const input2 = {
      val: 5, next: {
        val: 6,
        next: {
          val: 4
        }
      }
    }
    const value = addTwoNumbers(input1, input2);

    expect(getValuesFromLinkedList(value)).toStrictEqual(([7, 0, 8]));
  });
  it('Edge case: when we have to add 1 at the end', () => {

    const input1 = getLinkedList([5])
    const input2 = getLinkedList([5])

    const value = addTwoNumbers(input1, input2);

    expect(getValuesFromLinkedList(value)).toStrictEqual([0, 1]);
  })
  it('base case: same size ', () => {

    const input1 = getLinkedList([2, 4, 3])
    const input2 = getLinkedList([5, 6, 4])

    const value = addTwoNumbers(input1, input2);

    expect(getValuesFromLinkedList(value)).toStrictEqual([7, 0, 8]);
  })
  it('when the number is super big', () => {

    const input1 = getLinkedList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    const input2 = getLinkedList([5, 6, 4])

    const value = addTwoNumbers(input1, input2);

    expect(getValuesFromLinkedList(value)).toStrictEqual([6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
  })

});