function sumNthTriangle(num) {
    if (num === 1) {
        return 1;
    }
    
    return num + sumNthTriangle(num - 1);
}

module.exports = sumNthTriangle;
