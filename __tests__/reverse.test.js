const reverse = require("../katas/3-reverse");

describe('', () => {
    test('return type of output', () => {
        const input = 'example';

        const output = typeof reverse(input);

        const expected = 'string';
        expect(output).toBe(expected);
    });

    test('single char string', () => {
        const input = 'e';

        const output = reverse(input);

        const expected = 'e';
        expect(output).toBe(expected);
    });

    test('multiple char string', () => {
        const input = 'example';

        const output = reverse(input);

        const expected = 'elpmaxe';
        expect(output).toBe(expected);
    });
});
