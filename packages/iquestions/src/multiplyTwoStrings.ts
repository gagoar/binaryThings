// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
// Note:

// The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.


export const multiply = function (number1: string, number2: string): string {

  const list1 = number1.split('').reverse();
  const list2 = number2.split('').reverse();

  const bigList = list1.length >= list2.length ? list1 : list2;

  const smallList = list1 === bigList ? list2 : list1;

  const finalResult = smallList.reduce<number>((memo, valueA, index) => {

    const valueArr = bigList.map((val, i) => Number((Number(valueA) * Number(val)) + Array.from({ length: i }, () => 0).join("")));

    const value = valueArr.reduce<number>((memo, v) => memo + v, 0);

    return memo + (Number(value + Array.from({ length: index }, () => 0).join("")));

  }, 0);

  console.log(finalResult);

  return finalResult.toLocaleString('fullwide', { useGrouping: false });
};