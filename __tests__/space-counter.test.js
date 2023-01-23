const spaceCounter = require('../katas/4-space-counter');

describe('spaceCounter', () => {
    test('returns a number', () => {
        const input = '';

        const output = typeof spaceCounter(input);

        const expected = 'number';
        expect(output).toBe(expected);
    });

    test('empty string returns 0', () => {
        const input = '';

        const output = spaceCounter(input);

        const expected = 0;
        expect(output).toBe(expected);
    });

    test('string with only spaces returns the string\'s length', () => {
        const input = '    ';

        const output = spaceCounter(input);

        const expected = input.length;
        expect(output).toBe(expected);
    });

    test('string with only spaces returns the string\'s length', () => {
        const input = '    ';

        const output = spaceCounter(input);

        const expected = input.length;
        expect(output).toBe(expected);
    });
    
    test('string with spaces and non-spaces returns the number of spaces', () => {
        const input = ' 1 2 3 4 5';

        const output = spaceCounter(input);

        const expected = 5;
        expect(output).toBe(expected);
    });
});
