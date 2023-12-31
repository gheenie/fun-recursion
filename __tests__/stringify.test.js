const stringify = require('../katas/12-stringify');

describe('stringify()', () => {
    test('empty object', () => {
        const input = {};

        const output = stringify(input);

        const expected = '{}';
        expect(output).toBe(expected);
    });

    test('one level object', () => {
        const input = { x: 5, y: 6 };

        const output = stringify(input);

        const expected = '{"x":5,"y":6}';
        expect(output).toBe(expected);
    });

    test('nested objects', () => {
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

    test('nested array; different data types', () => {
        const input = [new Number(3), new String('false'), new Boolean(false)];

        const output = stringify(input);

        const expected = '[3,"false",false]';
        expect(output).toBe(expected);
    });
});
