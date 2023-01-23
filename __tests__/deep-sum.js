const deepSum = require('../katas/7-deep-sum');

describe('happy paths', () => {
    test('type of output', () => {
        const input = [1, 2, 3];

        const output = typeof deepSum(input);

        const expected = 'number';
        expect(output).toBe(expected);
    });

    test('1D array', () => {
        const input = [1, 2, 3];

        const output = deepSum(input);

        const expected = 6;
        expect(output).toBe(expected);
    });

    test('one level deep nested array', () => {
        const input = [1, [5, 10]];

        const output = deepSum(input);

        const expected = 16;
        expect(output).toBe(expected);
    });

    test('> 1 level deep nested array', () => {
        const input = [3, [[6]], 9];

        const output = deepSum(input);

        const expected = 18;
        expect(output).toBe(expected);
    });
});
