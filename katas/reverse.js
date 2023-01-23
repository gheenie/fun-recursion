function reverse(str, index = str.length - 1) {
    if (index === 0) {
        return str[0];
    }

    const char = str[index];

    return char + reverse(str, index - 1);
}

module.exports = reverse;
