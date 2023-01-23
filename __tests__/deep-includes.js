const deepIncludes = require('../katas/deep-includes');

describe('', () => {
    test('type of output', () => {
        const input1 = [1, 2];
        const input2 = 3;

        const output = deepIncludes(input1, input2);

        const expected = 'boolean';
        expect(typeof output).toBe(expected);
    });

    test('no nested elements; returns false', () => {
        const input1 = [1, 2];
        const input2 = 3;

        const output = deepIncludes(input1, input2);

        const expected = false;
        expect(output).toBe(expected);
    });

    test('no nested elements; returns true', () => {
        const input1 = [1, 2];
        const input2 = 2;

        const output = deepIncludes(input1, input2);

        const expected = true;
        expect(output).toBe(expected);
    });

    test('has nested elements; returns true', () => {
        const input1 = ["toast", ["avocado", ["chilli flakes"]]];
        const input2 = 'chilli flakes';

        const output = deepIncludes(input1, input2);

        const expected = true;
        expect(output).toBe(expected);
    });

    test('has nested elements; chosenValue is higher level after nested; returns true', () => {
        const input1 = ["toast", ["avocado", ["chilli flakes"]], 'apple'];
        const input2 = 'apple';

        const output = deepIncludes(input1, input2);

        const expected = true;
        expect(output).toBe(expected);
    });

    test('has nested elements; returns false', () => {
        const input1 = ["toast", ["avocado", ["chilli flakes"]]];
        const input2 = 'fruit';

        const output = deepIncludes(input1, input2);

        const expected = false;
        expect(output).toBe(expected);
    });
});
