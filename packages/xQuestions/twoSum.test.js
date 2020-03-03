import test from "ava";
import { twoSum } from "./twoSum";

test.only("should add Two Numbers", t => {
  const value = twoSum([3, 2, 4], 6);
  debugger;
  t.is(value, [1, 2]);
});

test("should add Two Numbers", t => {
  const value = twoSum([2, 7, 11, 15], 9);

  t.is(value, [0, 1]);
});
