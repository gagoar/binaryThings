import test from 'ava';
import permute from './everyPermutationOfAString.page109';

test('sholud have 6 permutations', async(t) => {
  const value = await permute('abc');

  t.is(value.length, 6);
});

test('sholud have 6 permutations', async(t) => {
  const value = await permute('ana', true);

  t.is(value.size, 3);
});
