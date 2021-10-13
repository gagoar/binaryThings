import { romanToInt } from '../src/romanToInteger';
describe('romanToInteger', () => {
  it('basic addition', () => {

    const value = romanToInt('III');

    expect(value).toStrictEqual(3);
  });
  it('basic subtraction', () => {

    const value = romanToInt('IV');

    expect(value).toStrictEqual(4);
  })
  it('basic subtraction', () => {

    const value = romanToInt('IX');

    expect(value).toStrictEqual(9);
  })
  it('more complex addition + subtraction', () => {

    const value = romanToInt('LVIII');

    expect(value).toStrictEqual(58);
  })

  it('the whole nine yards', () => {

    const value = romanToInt('MCMXCIV');

    expect(value).toStrictEqual(1994);
  });
});