const deepFreeze = require('../katas/10-deep-freeze')

describe('deepFreeze', () => {
    it('returns undefined', () => {
        const input = { a: 1 };

        const output = typeof deepFreeze(input);

        const expected = 'undefined'
        expect(output).toBe(expected);
    });

    it('freezes only the first level', () => {
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

        deepFreeze(input);
        input.a = 1;
        input.b = 1;
        input.a.b = 1;
        input.f = 1;
        input.d.e = 3;
        input.d = 3;

        const expected = { 
            a: { 
                b: 1 
            }, 
            d: { 
                e: 3 
            } 
        };
        expect(input).toEqual(expected);
    });

    test('nested elements; should freeze the second level', () => {
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

        deepFreeze(input);
        input.a = 1;
        input.b = 1;
        input.a.b = 1;
        input.f = 1;
        input.d.e = 3;
        input.d = 3;
        input.a.b.c = 3;

        const expected = { 
            a: { 
                b: { 
                    c: 1 
                } 
            }, 
            d: { 
                e: 2 
            } 
        };
        expect(input).toEqual(expected);
    });
});
