const bubbleSort = require('../katas/15-bubble-sort');

describe('', () => {
    test('', () => {
        const input = [1, 4, 2, 3];

        const output = bubbleSort(input);

        const expected = [1, 2, 3, 4];
        expect(output).toEqual(expected);
    });

    test('longer length; small nums at the back', () => {
        const input = [8, 6, 7, 5, 4, 3, 2, 1];

        const output = bubbleSort(input);

        const expected = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(output).toEqual(expected);
    });
});
