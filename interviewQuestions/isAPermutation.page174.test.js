import test from 'ava';
import isaPermutation from './isAPermutation.page174';

test('should throw if input is not a couple of Strings', (t) => {
  let error = t.throws(() => isaPermutation(1));

  t.is(error.message, 'invalid input, please try to provide 2 valid strings');
});

test('should throw if input is just empty strings', (t) => {
  let error = t.throws(() => isaPermutation('   ', '   '));

  t.is(error.message, 'invalid input, please try to provide 2 valid strings');
});

test('should be false if are 2 equal strings', (t) => {
  t.false(isaPermutation('anna', 'anna'));
});

test('should be true if is a valid permutation', (t) => {
  t.true(isaPermutation('anna', 'anan'));
});

test('should be True givin that we ignore empty spaces', (t) => {
  t.false(isaPermutation('anna', 'ana na'));
});

test('should be false if we are missing characters', (t) => {
  t.false(isaPermutation('anna', 'naa'));
});
