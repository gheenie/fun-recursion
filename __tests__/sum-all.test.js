const sumAll = require('../katas/sum-all');

describe('', () => {
    test('return type of output', () => {
        const input = 4;

        const output = sumAll(input);

        const expected = 'number';
        expect(typeof output).toBe(expected);
    });

    test('final value of output, when input is 1', () => {
        const input = 1;

        const output = sumAll(input);

        const expected = 1;
        expect(output).toBe(expected);
    });

    test('final value of output, when input is 4', () => {
        const input = 4;

        const output = sumAll(input);

        const expected = 10;
        expect(output).toBe(expected);
    });
});
