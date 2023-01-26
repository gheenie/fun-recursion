function boggle(board, matchee, buildupMatch = '', matchIndex = 0, traversedPositions = [], validNextPositions, currentPosition = [0, 0]) {
    function getValidNextPositions(row, col, maxRows, maxCols, traversedPositions) {
        const possibleNextPositions = [
            [row - 1, col - 1], 
            [row - 1, col], 
            [row - 1, col + 1], 
            [row, col - 1], 
            [row, col + 1], 
            [row + 1, col - 1], 
            [row + 1, col], 
            [row + 1, col + 1]
        ];

        // Filter out out-of-bounds positions.
        return possibleNextPositions.filter( (position) => {
            if (
                position[0] < 0 || 
                position[0] >= maxRows || 
                position[1] < 0 || 
                position[1] >= maxCols
            ) {
                return false;
            }

            return traversedPositions.every( (traversedPosition) => JSON.stringify(traversedPosition) !== JSON.stringify(position) );
        } );
    }

    const maxRows = board.length;
    const maxCols = board[0].length;

    if (matchIndex === 0) {
        for (let row = 0; row < maxRows; row++) {
            for (let col = 0; col < maxCols; col++) {
                if (board[row][col] === matchee[matchIndex]) {
                    buildupMatch += matchee[matchIndex];
                    
                    if (buildupMatch === matchee) return true;
                    
                    matchIndex++;
                    
                    traversedPositions.push([row, col]);
                    
                    const validNextPositions = getValidNextPositions(row, col, maxRows, maxCols, traversedPositions);

                    return boggle(board, matchee, buildupMatch, matchIndex, traversedPositions, validNextPositions, validNextPositions[validNextPositions.length - 1]);
                }
            }
        }
    } else {
        const row = currentPosition[0];
        const col = currentPosition[1];

        if (board[row][col] === matchee[matchIndex]) {
            buildupMatch += matchee[matchIndex];
            
            if (buildupMatch === matchee) return true;
            
            matchIndex++;
            
            traversedPositions.push([row, col]);
            
            validNextPositions = getValidNextPositions(row, col, maxRows, maxCols, traversedPositions);

            return boggle(board, matchee, buildupMatch, matchIndex, traversedPositions, validNextPositions, validNextPositions[validNextPositions.length - 1]);
        } else {
            validNextPositions.pop();

            if (validNextPositions.length === 0) return false;
            
            return boggle(board, matchee, buildupMatch, matchIndex, traversedPositions, validNextPositions, validNextPositions[validNextPositions.length - 1]);
        }
    }

    return false;
}

module.exports = boggle;
