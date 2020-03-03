import test from "ava";
import permute from "./everyPermutationOfAString.page109";

test("sholud have 6 permutations", async t => {
  const value = await permute("abc");

  t.deepEqual(value.length, 6);
});

test("sholud have 6 permutations", async t => {
  const value = await permute("ana", true);

  t.deepEqual(value.size, 3);
});
