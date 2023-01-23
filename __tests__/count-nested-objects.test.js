const countNestedObjects = require('../katas/9-count-nested-objects');

describe('countNestedObjects', () => {
    test('type of output', () => {
        const input = { a: 1 };

        const output = typeof countNestedObjects(input);

        const expected = 'number';
        expect(output).toBe(expected);
    });

    test('no nested elements; returns 1', () => {
        const input = { a: 1 };

        const output = countNestedObjects(input);

        const expected = 1;
        expect(output).toBe(expected);
    });

    test('nested elements', () => {
        const input = { 
            a: { 
                b: { 
                    c: 1 
                } 
            } 
        };

        const output = countNestedObjects(input);

        const expected = 3;
        expect(output).toBe(expected);
    });
    
    test('nested elements branching from 1st object', () => {
        const input = { 
            a: { 
                b: { 
                    c: 1 
                } 
            }, 
            d: { 
                e: 2 
            } 
        };

        const output = countNestedObjects(input);

        const expected = 4;
        expect(output).toBe(expected);
    });
});
