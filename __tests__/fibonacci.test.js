const fibonacci = require('../katas/6-fibonacci');

describe('fibonacci', () => {
    test('returns a number', () => {
        const input = 1;

        const output = typeof fibonacci(input);

        const expected = 'number';
        expect(output).toBe(expected);
    });
    
    test('returns the number in the fobonacci sequence', () => {
        const input = 7;

        const output = fibonacci(input);

        const expected = 8;
        expect(output).toBe(expected);
    });
});
