function spaceCounter(str, count = 0) {
    if (str.indexOf(' ') === -1) {
        return count
    }
    const string = str.slice(str.indexOf(' ') + 1)
    count++
    return spaceCounter(string, count);
}

module.exports = spaceCounter;
