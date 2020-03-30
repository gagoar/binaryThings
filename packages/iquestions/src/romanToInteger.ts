/**
 * @param {string} 
 * @return {number}
 */

const SUBTRACTS_CASES = {
  I: (roman: ROMAN[], pos: number): number => ['V', 'X'].includes(roman[pos + 1]) ? ROMAN_NUMBERS_MAP[roman[pos + 1]] - ROMAN_NUMBERS_MAP['I'] : 0,
  X: (roman: ROMAN[], pos: number) => ['L', 'C'].includes(roman[pos + 1]) ? ROMAN_NUMBERS_MAP[roman[pos + 1]] - ROMAN_NUMBERS_MAP['X'] : 0,
  C: (roman: ROMAN[], pos: number) => ['D', 'M'].includes(roman[pos + 1]) ? ROMAN_NUMBERS_MAP[roman[pos + 1]] - ROMAN_NUMBERS_MAP['C'] : 0,
};

const ROMAN_NUMBERS_MAP = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
type ROMAN = keyof typeof ROMAN_NUMBERS_MAP;
type SubTractableType = keyof typeof SUBTRACTS_CASES;

const isSubTractable = (roman: ROMAN | SubTractableType): roman is SubTractableType => roman in SUBTRACTS_CASES;

export const romanToInt = (romanNumber: string): number => {

  const romanNumberArr = romanNumber.split('') as ROMAN[];

  type Memo = { result: number[], skipNext: boolean }
  const values = romanNumberArr.reduce<Memo>((memo, roman, index) => {
    let value = ROMAN_NUMBERS_MAP[roman];

    if (memo.skipNext) {
      return { ...memo, skipNext: false };
    }

    if (isSubTractable(roman)) {
      const subtractAmount = SUBTRACTS_CASES[roman](romanNumberArr, index);
      if (subtractAmount) {
        memo.skipNext = !!subtractAmount;
        value = subtractAmount;
      }
    }

    memo.result.push(value);

    return memo;

  }, { result: [0], skipNext: false });

  return values.result.reduce((memo, value) => memo + value, 0);
};