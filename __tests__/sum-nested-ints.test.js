const sumNestedInts = require('../katas/sum-nested-ints');

describe('', () => {
    test('type of output', () => {
        const input = [1, 2, 3];

        const output = sumNestedInts(input);

        const expected = 'number';
        expect(typeof output).toBe(expected);
    });

    test('no nested arrays', () => {
        const input = [1, 2, 3];

        const output = sumNestedInts(input);

        const expected = 6;
        expect(output).toBe(expected);
    });

    test('one level deep nested array', () => {
        const input = [1, [5, 10]];

        const output = sumNestedInts(input);

        const expected = 16;
        expect(output).toBe(expected);
    });

    test('two levels deep nested array', () => {
        const input = [3, [[6]], 9];

        const output = sumNestedInts(input);

        const expected = 18;
        expect(output).toBe(expected);
    });
});
