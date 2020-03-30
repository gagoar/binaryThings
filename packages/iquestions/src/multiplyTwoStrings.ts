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


const addTwoNumbers = (list1: number[], list2: number[]): number[] => {
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
  return arrResult.addedUp;
}

const add = (memo: number[] = [], val: number[] = []) => {
  if (memo.length) {
    const r = addTwoNumbers(memo, val);
    return r;
  } else {
    return val;
  }
}
export const multiply = function (number1: string, number2: string): string {

  if (number1 === '0' || number2 === '0') {
    return '0';
  }

  const list1 = number1.split('').reverse();
  const list2 = number2.split('').reverse();

  const bigList = list1.length >= list2.length ? list1 : list2;

  const smallList = list1 === bigList ? list2 : list1;

  const result = smallList.map<number[]>((valueA) => {
    const values = bigList.map((val, i) => {
      return (
        (Number(valueA) * Number(val)) + Array.from({ length: i }, () => 0).join("")
      ).split("").map(Number).reverse();
    });

    return values.reduce(add, []);
  }, 0);

  const realOnes = result.map<number[]>((val, i) => {
    return [...Array.from({ length: i }, () => 0), ...val];
  });

  const final = realOnes.reduce(add, [])

  return String(final.reverse().join(""))
};