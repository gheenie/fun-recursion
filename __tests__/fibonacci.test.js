const fibonacci = require('../katas/6-fibonacci');

describe('fibonacci', () => {
    test('returns a number', () => {
        const input = 1;

        const output = typeof fibonacci(input);

        const expected = 'number';
        expect(output).toBe(expected);
    });

    test('input special case 1', () => {
        const input = 1;

        const output = fibonacci(input);

        const expected = 0;
        expect(output).toBe(expected);
    });

    test('input special case 2', () => {
        const input = 2;

        const output = fibonacci(input);

        const expected = 1;
        expect(output).toBe(expected);
    });

    test('input > 2', () => {
        const input = 7;

        const output = fibonacci(input);

        const expected = 8;
        expect(output).toBe(expected);
    });
});
