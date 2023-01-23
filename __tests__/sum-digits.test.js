const sumDigits = require('../katas/5-sum-digits');

describe('happy paths', () => {
    test('returns a number', () => {
        const input = 0;

        const output = sumDigits(input);

        const expected = typeof 'number';
        expect(output).toBe(expected);
    });

    test('only one digit returns the same digit', () => {
        const input = 1;

        const output = sumDigits(input);

        const expected = input;
        expect(output).toEqual(expected);
    });

    test('multiple digits returns the sum of its digits; 2 calls', () => {
        const input = 999;

        const output = sumDigits(input);

        const expected = 9;
        expect(output).toBe(expected);
    });

    test('multiple digits returns the sum of its digits; 3 calls', () => {
        const input = 88888888;

        const output = sumDigits(input);

        const expected = 1;
        expect(output).toBe(expected);
    });
});
