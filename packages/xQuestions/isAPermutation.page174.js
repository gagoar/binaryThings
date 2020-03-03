// Given two strings, write a method to decide if one is a permutation of the other.

const SPACE_PATTERN = /\s+/g;

const _isString = (content) => typeof content === 'string';

const _isValidInput = (...values) => {
  let isValid = false;

  if (values.every(_isString)) {
    const valuesWithoutSpaces = values.map((value) => value.replace(SPACE_PATTERN, ''));

    // after stripping down spaces, we check if we still have valid strings.
    isValid = valuesWithoutSpaces.every((value) => value.length);
  }

  return isValid;
};
// in this case normalize means, that we would count the letters in every word, so we can compare them letter on.

const _normalize = (word) => (
  word.reduce((memo, char) => {
    let additive = 1;

    if (char in memo) {
      additive += memo[char];
    }

    // we normalize every string to an object counting every letter used.
    return {...memo, [char]: additive};
  }, {})
);

const isaPermutation = (original = '', permutation = '') => {
// we are gonna define, for the sake of the excercise that an empty string is not a permutation of itself :P
// we are not gonna consider spaces
  if (!_isValidInput(original, permutation)) {
    throw new Error('invalid input, please try to provide 2 valid strings');
  }

  // Quick exit cases.
  // different length.
  // same string
  if (original === permutation || original.length !== permutation.length ) {
    return false;
  }

  const values = [original, permutation].map((value) => (
    value.replace(SPACE_PATTERN, '').split('')
  ));

  const [normalizedOriginal, normalizedPermutation] = values.map(_normalize);

  // we compare both objects. for an exact match.
  return Object.keys(normalizedOriginal).every((key) => normalizedOriginal[key] === normalizedPermutation[key]);
};

export default isaPermutation;
