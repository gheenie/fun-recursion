const boggle = require('../katas/16-boggle');

describe('', () => {
    const board = [
        ["e", "a", "r", "a"],
        ["n", "l", "e", "c"],
        ["i", "a", "i", "s"],
        ["b", "y", "o", "r"],
    ];

    test('letter not in board', () => {
        expect( boggle(board, "z") ).toBe(false);
    });

    test('one letter match, roughly mid of board', () => {
        expect( boggle(board, "l") ).toBe(true);
    });
    
    test('two letter match', () => {
        expect( boggle(board, "lr") ).toBe(true);
    });

    test('other tests', () => {
        expect( boggle(board, "ear") ).toBe(true); // true
        expect( boggle(board, "ears") ).toBe(false); // false
        expect( boggle(board, "rio") ).toBe(true); // true
        expect( boggle(board, "cereal") ).toBe(false); // false
        expect( boggle(board, "rscareioybailnea") ).toBe(true); // true
    });
});

describe('', () => {
    const board = [
        ["d", "a", "y", "a"],
        ["n", "l", "e", "c"],
        ["i", "a", "i", "s"],
        ["s", "r", "o", "r"],
    ];

    test('letter not in board', () => {
        expect( boggle(board, "z") ).toBe(false);
    });

    test('one letter match, roughly mid of board', () => {
        expect( boggle(board, "l") ).toBe(true);
    });
    
    test('two letter fail', () => {
        expect( boggle(board, "lr") ).toBe(false);
    });

    test('second branch of branching out', () => {
        expect( boggle(board, "ears") ).toBe(true);
    });
});
