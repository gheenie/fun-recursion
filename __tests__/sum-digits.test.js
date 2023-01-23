const sumDigits = require('../katas/sum-digits');

describe('sumDigits', () => {
    test('returns a number', () => {
        const input = 0;

        const output = sumDigits(input);

        const expected = 'number';
        expect(typeof output).toBe(expected);
    });
    test('only one digit returns the same digit', () => {
        const input = 1;

        const output = sumDigits(input);

        expect(output).toEqual(input);
    });
    test('multiple digits returns the sum of its digits', () => {
        const input = 999;

        const output = sumDigits(input);

        const expected = 9;

        expect(output).toBe(expected);
    });
    test('multiple digits returns the sum of its digits', () => {
        const input = 88888888;

        const output = sumDigits(input);

        const expected = 1;

        expect(output).toBe(expected);
    });
});
;
