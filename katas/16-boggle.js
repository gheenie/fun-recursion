function boggle(board, matchee, matchIndex = 0, matchedPositions, nextPositions, collectionOfNextPositions = []) {
    // The path is like a breadth-first search.

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

        // Filter out out-of-bounds and previously matched positions.
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
        // Get first-level matches.
        
        const firstRunMatchedPositions = [];

        for (let row = 0; row < maxRows; row++) {
            for (let col = 0; col < maxCols; col++) {
                if (board[row][col] === letterToMatch) {
                    firstRunMatchedPositions.push([row, col]);
                }
            }
        }
        
        // Easy logic for no matches and if only one match required.

        if (firstRunMatchedPositions.length === 0) return false;

        if (matchee.length === 1) return true;

        // Logic of the 4 params.

        matchIndex++;
        
        const isFullyMatched = firstRunMatchedPositions.map( (firstRunMatchedPosition) => {
            const firstRunMatchedPositionInArray = [];
            firstRunMatchedPositionInArray.push(firstRunMatchedPosition);

            nextPositions = getValidNextPositions(firstRunMatchedPosition, maxRows, maxCols, firstRunMatchedPositionInArray);

            collectionOfNextPositions.push(nextPositions);

            return boggle(board, matchee, matchIndex, firstRunMatchedPositionInArray, nextPositions, collectionOfNextPositions);
        } );
        
        // At least one branch from first-level matches get a complete match.

        if ( isFullyMatched.includes(true) ) return true;

        return false;
    }

    if (matchIndex > 0) {
        const currentPosition = nextPositions.shift();

        if (board[currentPosition[0]][currentPosition[1]] === letterToMatch) {
            matchedPositions.push(currentPosition);

            if (matchee.length === matchedPositions.length) return true;
    
            matchIndex++;
            const deeperNextPositions = getValidNextPositions(currentPosition, maxRows, maxCols, matchedPositions);
            collectionOfNextPositions.push( deeperNextPositions );
            return boggle(board, matchee, matchIndex, matchedPositions, deeperNextPositions, collectionOfNextPositions);
        } else {
            if (nextPositions.length === 0) {
                collectionOfNextPositions.pop();

                if (collectionOfNextPositions.length === 0) return false;

                matchedPositions.pop();
                matchIndex--;
                return boggle(board, matchee, matchIndex, matchedPositions, collectionOfNextPositions[collectionOfNextPositions.length - 1], collectionOfNextPositions);
            };
            return boggle(board, matchee, matchIndex, matchedPositions, nextPositions, collectionOfNextPositions);
        }
    }
}

module.exports = boggle;
