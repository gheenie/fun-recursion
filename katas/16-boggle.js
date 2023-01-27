function boggle(board, matchee, matchIndex = 0, matchedPositions, validNextPositions) {
    function getValidNextPositions(currentPosition, maxRows, maxCols, matchedPositions) {
        const [row, col] = currentPosition;
        
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

            return matchedPositions.every( (matchedPosition) => JSON.stringify(matchedPosition) !== JSON.stringify(position) );
        } );
    }

    const maxRows = board.length;
    const maxCols = board[0].length;
    const letterToMatch = matchee[matchIndex];

    if (matchIndex === 0) {
        const firstRunMatchedPositions = [];

        for (let row = 0; row < maxRows; row++) {
            for (let col = 0; col < maxCols; col++) {
                if (board[row][col] === letterToMatch) {
                    firstRunMatchedPositions.push([row, col]);
                }
            }
        }
        
        if (firstRunMatchedPositions.length === 0) return false;

        if (matchee.length === 1) return true;

        matchIndex++;

        const isFullyMatched = firstRunMatchedPositions.map( (firstRunMatchedPosition) => {
            const firstRunMatchedPositionInArray = [];
            firstRunMatchedPositionInArray.push(firstRunMatchedPosition);

            validNextPositions = getValidNextPositions(firstRunMatchedPosition, maxRows, maxCols, firstRunMatchedPositionInArray);

            return boggle(board, matchee, matchIndex, firstRunMatchedPositionInArray, validNextPositions);
        } );
        
        if ( isFullyMatched.includes(true) ) return true;

        return false;
    }

    if (matchIndex > 0) {
        const row = validNextPositions[0][0];
        const col = validNextPositions[0][1];

        if (board[row][col] === letterToMatch) {
            matchedPositions.push(validNextPositions[0]);

            if (matchee.length === matchedPositions.length) return true;
    
            matchIndex++;
            validNextPositions = getValidNextPositions(validNextPositions[0], maxRows, maxCols, matchedPositions);

            return boggle(board, matchee, matchIndex, matchedPositions, validNextPositions, validNextPositions[validNextPositions.length - 1])
        } else {
            validNextPositions.shift();

            if (validNextPositions.length === 0) return false;
            
            return boggle(board, matchee, matchIndex, matchedPositions, validNextPositions);
        }
    }
}

module.exports = boggle;
