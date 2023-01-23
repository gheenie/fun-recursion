const factorial = require('../katas/factorial');

describe('', () => {
    test('return type of output', () => {
        const input = 4;

        const output = factorial(input);

        const expected = 'number';
        expect(typeof output).toBe(expected);
    });

    test('final value of output', () => {
        const input = 4;

        const output = factorial(input);

        const expected = 24;
        expect(output).toBe(expected);
    });
});
