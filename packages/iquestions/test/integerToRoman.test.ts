import { intToRoman } from '../src/integerToRoman';
describe('romanToInteger', () => {
  it('basic addition', () => {

    const value = intToRoman(3);

    expect(value).toStrictEqual('III');
  });
  it('basic addition', () => {

    const value = intToRoman(20);

    expect(value).toStrictEqual('XX');
  })
  it('basic addition', () => {

    const value = intToRoman(20);

    expect(value).toStrictEqual('XX');
  })
  it('basic subtraction', () => {
    const value = intToRoman(4);

    expect(value).toStrictEqual('IV');
  })
  it('basic subtraction', () => {

    const value = intToRoman(9);

    expect(value).toStrictEqual('IX');
  })
  it('more complex addition + subtraction', () => {

    const value = intToRoman(58);

    expect(value).toStrictEqual('LVIII');
  })

  it('the whole nine yards', () => {

    const value = intToRoman(1994);

    expect(value).toStrictEqual('MCMXCIV');
  });

  it('big number', () => {

    const value = intToRoman(2000);

    expect(value).toStrictEqual('MM');
  })
});