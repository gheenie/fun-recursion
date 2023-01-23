function sumAll(num) {
    if (num === 1) {
        return 1;
    }
    
    return num + sumAll(num - 1);
}

module.exports = sumAll;
