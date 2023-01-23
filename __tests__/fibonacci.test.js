const fibonacci = require('../katas/fibonacci');

describe('fibonacci', () => {
    test('returns a number', () => {
        const input = 1;

        const output = fibonacci(input);

        const expected = 'number';
        expect(typeof output).toBe(expected);
    });
    test('returns the number in the fobonacci sequence', () => {
        const input = 7;

        const output = fibonacci(input);

        const expected = 8;
        expect(output).toBe(expected);
    });
});
