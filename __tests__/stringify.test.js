const stringify = require('../katas/stringify');

describe('stringify()', () => {
    test('empty object', () => {
        const input = {};

        const output = stringify(input);

        const expected = '{}';
        expect(output).toBe(expected);
    });

    test('one level object only; has whitespaces', () => {
        const input = { x: 5, y: 6 };

        const output = stringify(input);

        const expected = '{"x":5,"y":6}';
        expect(output).toBe(expected);
    });

    test('deep level object only; has whitespaces', () => {
        const input = { x: 5, y: { a: 1, b: 2 } };

        const output = stringify(input);

        const expected = '{"x":5,"y":{"a":1,"b":2}}';
        expect(output).toBe(expected);
    });
});
