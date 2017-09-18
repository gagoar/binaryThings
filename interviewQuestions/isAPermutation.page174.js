// Given two strings, write a method to decide if one is a permutation of the other.

const SPACE_PATTERN = /\s+/g;

const _isString = (content) => typeof content === 'string';

const _isValidInput = (...values) => {
  let isValid = false;

  const areStrings = values.every(_isString);

  if (areStrings) {
    const valuesWithoutSpaces = values.map((value) => value.replace(SPACE_PATTERN, ''));

    isValid = valuesWithoutSpaces.every((value) => value.length);
  }

  return isValid;
};

const isaPermutation = (original = '', permutation = '') => {
// we are gonna define, for the sake of the excercise that an empty string is not a permutation of itself :P
// we are not gonna consider spaces
  if (!_isValidInput(original, permutation)) {
    throw new Error('invalid input, please try to provide 2 valid strings');
  }
  // the same string is not a permutation of itself.
  // but both need to be the same length.
  if (original === permutation || original.length !== permutation.length ) {
    return false;
  }

  const values = [original, permutation].map((value) => (
    value.replace(SPACE_PATTERN, '').split('')
  ));

  const [originalToObj, permutationtoObj] = values.reduce((valuesToHashes, value) => {
    const hash = value.reduce((memo, char) => {
      let additive = 1;

      if (char in memo) {
        additive += memo[char];
      }

      return {...memo, [char]: additive};
    }, {});

    return [...valuesToHashes, hash];
  }, {});

  return Object.keys(originalToObj).every((key) => originalToObj[key] === permutationtoObj[key]);
};

export default isaPermutation;
