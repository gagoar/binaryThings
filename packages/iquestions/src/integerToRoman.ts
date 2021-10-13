/** Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

> Symbol       Value
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000
 For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

 Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

 I can be placed before V (5) and X (10) to make 4 and 9.
 X can be placed before L (50) and C (100) to make 40 and 90.
 C can be placed before D (500) and M (1000) to make 400 and 900.
 Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

 Example 1:

 Input: 3
 Output: "III"
 Example 2:

 Input: 4
 Output: "IV"
 Example 3:

 Input: 9
 Output: "IX"
 Example 4:

 Input: 58
 Output: "LVIII"
 Explanation: L = 50, V = 5, III = 3.
 Example 5:

 Input: 1994
 Output: "MCMXCIV"
 Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/



const ROMAN_NUMBERS_MAP = {
  '1': 'I',
  '5': 'V',
  '10': 'X',
  '50': 'L',
  '100': 'C',
  '500': 'D',
  '1000': 'M'
}

const SUBTRACTS_CASES = {
  'I': ['V', 'X'],
  'X': ['L', 'C'],
  'C': ['D', 'M'],
};
const EXCEPTIONS = ['4', '9'];
type ROMAN_INT = keyof typeof ROMAN_NUMBERS_MAP;
type Subtractable = keyof typeof SUBTRACTS_CASES;

const subtractRoman = (romanLetter: string): string | undefined => {
  return Object.keys(SUBTRACTS_CASES).find((key) => {
    return SUBTRACTS_CASES[key as Subtractable].includes(romanLetter);
  });

};

const zero = () => 0;

const calculateRoman = (int: number): string => {
  const romanOptions = Object.keys(ROMAN_NUMBERS_MAP);
  const index = romanOptions.findIndex((key) => {
    return int <= Number(key);
  });

  const strInt = String(int);

  if (strInt === '0') {
    return '';
  }

  if (index === -1) {
    // this will be the case when is > 1000;

    return Array.from({ length: Number(strInt[0]) }, () => ROMAN_NUMBERS_MAP[romanOptions[romanOptions.length - 1] as ROMAN_INT]).join('');
  }

  // it happens to be exactly the key
  if (romanOptions[index] === strInt) {
    return ROMAN_NUMBERS_MAP[romanOptions[index] as ROMAN_INT];
  }

  // it's an exception. [4, 9] as the first char
  if (EXCEPTIONS.includes(strInt[0])) {
    const baseRoman = ROMAN_NUMBERS_MAP[romanOptions[index] as ROMAN_INT];
    const subRoman = subtractRoman(baseRoman);

    return `${subRoman}${baseRoman}`;
  }

  // base Case 

  const baseRoman = ROMAN_NUMBERS_MAP[romanOptions[index - 1] as ROMAN_INT];

  const remains = int - Number(romanOptions[index - 1]);

  return `${baseRoman}${calculateRoman(remains)}`;

}
export const intToRoman = (int: number): string => {

  const arr = String(int).split('');

  const expandedArr = arr.reverse().map((digit, index) => {
    return digit + Array.from({ length: index }, zero).join('');
  });

  const roman = expandedArr.reverse().reduce((memo, value) => {
    return memo + calculateRoman(Number(value));
  }, '');

  return roman;
};