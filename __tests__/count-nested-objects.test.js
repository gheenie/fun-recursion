const countNestedObjects = require('../katas/count-nested-objects');

describe('countNestedObjects', () => {
    test('type of output', () => {
        const input = { a: 1 };

        const output = countNestedObjects(input);

        const expected = 'number';
        expect(typeof output).toBe(expected);
    });

    test('no nested elements; returns 1', () => {
        const input = { a: 1 };

        const output = countNestedObjects(input);

        const expected = 1;
        expect(output).toBe(expected);
    });

    test('nested elements; should count through objects', () => {
        const input = { a: { b: { c: 1 } } };

        const output = countNestedObjects(input);

        const expected = 3;
        expect(output).toBe(expected);
    });
    test('multiple nested elements; should count through objects', () => {
        const input = { a: { b: { c: 1 } } , d : {e : 2}};

        const output = countNestedObjects(input);

        const expected = 4;
        expect(output).toBe(expected);
    });

});
