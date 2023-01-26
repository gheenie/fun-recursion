const boggle = require('../katas/16-boggle');

describe('', () => {
    test('', () => {
        const board = [
            ["e", "a", "r", "a"],
            ["n", "l", "e", "c"],
            ["i", "a", "i", "s"],
            ["b", "y", "o", "r"],
        ];

        /*// Letter not in board
        expect( boggle(board, "z") ).toBe(false);
        // One letter, roughly mid of board
        expect( boggle(board, "l") ).toBe(true);
        // 2 letters
        expect( boggle(board, "lr") ).toBe(true);
        expect( boggle(board, "ear") ).toBe(true); // true
        expect( boggle(board, "ears") ).toBe(false); // false*/
        expect( boggle(board, "rio") ).toBe(true); // true
        /*expect( boggle(board, "cereal") ).toBe(false); // false
        expect( boggle(board, "rscareioybailnea") ).toBe(true); // true*/
    });
});
