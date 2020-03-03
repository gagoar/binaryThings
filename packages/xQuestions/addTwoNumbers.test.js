import test from "ava";
import addTwoNumbers from "./addTwoNumbers";

test("should add Two Numbers", async t => {
  const value = await addTwoNumbers([2, 4, 3][(5, 6, 4)]);

  t.is(value.length, [7, 0, 8]);
});
