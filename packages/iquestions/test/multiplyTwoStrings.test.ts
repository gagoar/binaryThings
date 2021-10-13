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

  it('should return 0 when one of the elements is 0', () => {

    const value = multiply("0", "85731737104263");

    expect(value).toStrictEqual("0");
  })
  it('should multiply long loooong numbers', () => {

    const value = multiply("9333852702227987", "85731737104263");

    expect(value).toStrictEqual("800207406037324579815815608581");
  })

  it('should multiply long numbers', () => {
    const value = multiply("123456789", "987654321");

    expect(value).toStrictEqual("121932631112635269");
  })
});