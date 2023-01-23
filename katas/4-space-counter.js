function spaceCounter(str, count = 0) {
    if (str.indexOf(' ') === -1) {
        return count;
    }

    const strAfterWhitespace = str.slice( str.indexOf(' ') + 1 );
    count++;

    return spaceCounter(strAfterWhitespace, count);
}

module.exports = spaceCounter;
