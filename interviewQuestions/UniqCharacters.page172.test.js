// Implement// *global window :true*/
import test from 'ava';

import hasDuplicatedCharacters from './UniqCharacters.page172';

test('should throw if input is not a String', (t) => {
  let error = t.throws(() => hasDuplicatedCharacters(1));

  t.is(error.message, 'please provide a string');
});

test('should find a letter repetition', (t) => {
  t.true(hasDuplicatedCharacters('anna'));
});

test('shouldn\'t find a letter repetition', (t) => {
  t.false(hasDuplicatedCharacters('german'));
});

test('shouldn\'t find a letter repetition in an empty string', (t) => {
  t.false(hasDuplicatedCharacters('german'));
});
