// Implement an algorithm to determine if a string has all unique characters. What
// if you cannot use additional data structures?

// adapting this to JS I think it would imply not using Set that would make the array uniq.

const _isString = (content) => typeof content === 'string';

const _countedLetters = (acc, letter) => {
  let value = 1;

  if ([letter] in acc) {
    value += acc[letter];
  }
  return {...acc, [letter]: value};
};

const hasDuplicatedCharacters = (content) => {
  if (!_isString(content)) {
    throw new Error('please provide a string');
  }

  let letters = content.split('');
  let countedLetters = letters.reduce(_countedLetters, {});
  let max = Math.max.apply(null, Object.values(countedLetters));

  // if we find anything bigger than 1, means that there's some repeated character.
  return max > 1;
};

export default hasDuplicatedCharacters;
