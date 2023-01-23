const factorial = require('../katas/1-factorial');

describe('happy paths', () => {
    test('return type of output', () => {
        const input = 4;

        const output = typeof factorial(input);

        const expected = 'number';
        expect(output).toBe(expected);
    });

    test('special input 0', () => {
        const input = 0;

        const output = factorial(input);

        const expected = 1;
        expect(output).toBe(expected);
    });

    test('special input 1', () => {
        const input = 1;

        const output = factorial(input);

        const expected = 1;
        expect(output).toBe(expected);
    });

    test('input is above 1', () => {
        const input = 4;

        const output = factorial(input);

        const expected = 24;
        expect(output).toBe(expected);
    });
});
