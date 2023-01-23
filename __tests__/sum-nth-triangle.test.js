const sumNthTriangle = require('../katas/2-sum-nth-triangle');

describe('', () => {
    test('return type of output', () => {
        const input = 4;

        const output = typeof sumNthTriangle(input);

        const expected = 'number';
        expect(output).toBe(expected);
    });

    test('special input 1', () => {
        const input = 1;

        const output = sumNthTriangle(input);

        const expected = 1;
        expect(output).toBe(expected);
    });

    test('input above 1', () => {
        const input = 4;

        const output = sumNthTriangle(input);

        const expected = 10;
        expect(output).toBe(expected);
    });
});
