const analyseArray = require('../katas/11-analyse-array');

describe.only('analyseArray() console logs', () => {
    test('empty array', () => {
        const input1 = 'jimbo';
        const input2 = [];

        const consoleSpy = jest.spyOn(console, 'log');
        analyseArray(input1, input2);

        const expected = 0;
        expect(consoleSpy).toHaveBeenCalledTimes(expected);
    });

    test('no nested elements', () => {
        const input1 = 'jimbo'
        const input2 = ['carrot', 'turtle'];

        const consoleSpy = jest.spyOn(console, 'log');
        analyseArray(input1, input2);

        const expected = 2;
        expect(consoleSpy).toHaveBeenCalledTimes(expected);
    });

    test('one level deep elements', () => {
        const input1 = 'jimbo'
        const input2 = ["carrot", ["car", "boat", "plane"], "turtle", ["house"]];

        const consoleSpy = jest.spyOn(console, 'log');
        analyseArray(input1, input2);

        const expected = 6;
        expect(consoleSpy).toHaveBeenCalledTimes(expected);
    });
});

describe('analyseArray() returns something instead of console logging', () => {
    test('empty array', () => {
        const input1 = 'jimbo';
        const input2 = [];

        const firstGenericFunc = analyseArray();
        const output = firstGenericFunc(input1, input2);

        const expected = [];
        expect(output).toEqual(expected);
    });

    test('no nested elements', () => {
        const input1 = 'jimbo';
        const input2 = ['carrot', 'turtle'];

        const firstGenericFunc = analyseArray();
        const output = firstGenericFunc(input1, input2);

        const expected = ['jimbo.0: carrot', 'jimbo.1: turtle'];
        expect(output).toEqual(expected);
    });

    test('nested elements', () => {
        const input1 = 'jimbo';
        const input2 = ["carrot", ["car", "boat", "plane"], "turtle", ["house"]];

        const firstGenericFunc = analyseArray();
        const output = firstGenericFunc(input1, input2);

        const expected = ['jimbo.0: carrot', 'jimbo.1.0: car', 'jimbo.1.1: boat', 'jimbo.1.2: plane', 'jimbo.2: turtle', 'jimbo.3.0: house'];
        expect(output).toEqual(expected);
    });
});
