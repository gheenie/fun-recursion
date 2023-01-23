const stringify = require('../katas/stringify');

describe('stringify()', () => {
    test('empty object', () => {
        const input = {};

        const output = stringify(input);

        const expected = '{}';
        expect(output).toBe(expected);
    });

    test('one level object; has whitespaces', () => {
        const input = { x: 5, y: 6 };

        const output = stringify(input);

        const expected = '{"x":5,"y":6}';
        expect(output).toBe(expected);
    });

    test('deep level object; has whitespaces', () => {
        const input = { x: 5, y: { a: 1, b: 2 } };

        const output = stringify(input);

        const expected = '{"x":5,"y":{"a":1,"b":2}}';
        expect(output).toBe(expected);
    });

    test('empty array', () => {
        const input = [];

        const output = stringify(input);

        const expected = '[]';
        expect(output).toBe(expected);
    });

    test('one level array; different data types; has whitespaces', () => {
        const input = [new Number(3), new String('false'), new Boolean(false)];

        const output = stringify(input);

        const expected = '[3,"false",false]';
        expect(output).toBe(expected);
    });
});
