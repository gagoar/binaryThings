import { multiply } from '../src/multiplyTwoStrings';

describe('multiply 2 strings', () => {
  it('should multiply two simple strings', () => {

    const value = multiply("2", "3");

    expect(value).toStrictEqual("6");
  });
  it('should multiply Two Strings', () => {
    const value = multiply("123", "456");

    expect(value).toStrictEqual("56088");
  });

  it.only('should multiply long numbers', () => {
    const value = multiply("123456789", "987654321");

    expect(value).toStrictEqual("121932631112635269");
  })

});