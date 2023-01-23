const analyseArray = require('../katas/analyse-array');

describe('analyseArray() console logs', () => {
    test('empty array', () => {
        const input1 = 'jimbo'
        const input2 = [];
        const consoleSpy = jest.spyOn(console, 'log');

        const output = analyseArray(input1, input2);

        const expected = [];
        expect(output).toEqual(expected);
    });

    test('no nested elements', () => {
        const input1 = 'jimbo'
        const input2 = ['carrot', 'turtle'];

        const output = analyseArray(input1, input2);

        const expected = ['jimbo.0: carrot', 'jimbo.1: turtle'];
        expect(output).toEqual(expected);
    });

    test('one level deep elements', () => {
        const input1 = 'jimbo'
        const input2 = ["carrot", ["car", "boat", "plane"], "turtle", ["house"]];

        const output = analyseArray(input1, input2);

        const expected = ['jimbo.0: carrot', 'jimbo.1.1: car', 'jimbo.1.2: boat', 'jimbo.1.3: plane', 'jimbo.2: turtle', 'jimbo.3.0: house'];
        expect(output).toEqual(expected);
    });
});

describe.only('analyseArray() returns something instead of console logging', () => {
    test('empty array', () => {
        const input1 = 'jimbo'
        const input2 = [];

        const helper = analyseArray();
        const output = helper(input1, input2);

        const expected = [];
        expect(output).toEqual(expected);
    });

    test('no nested elements', () => {
        const input1 = 'jimbo'
        const input2 = ['carrot', 'turtle'];

        const helper = analyseArray();
        const output = helper(input1, input2);

        const expected = ['jimbo.0: carrot', 'jimbo.1: turtle'];
        expect(output).toEqual(expected);
    });

    test('one level deep elements', () => {
        const input1 = 'jimbo'
        const input2 = ["carrot", ["car", "boat", "plane"], "turtle", ["house"]];

        const helper = analyseArray();
        const output = helper(input1, input2);

        const expected = ['jimbo.0: carrot', 'jimbo.1.0: car', 'jimbo.1.1: boat', 'jimbo.1.2: plane', 'jimbo.2: turtle', 'jimbo.3.0: house'];
        expect(output).toEqual(expected);
    });
});
