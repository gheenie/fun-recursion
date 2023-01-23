function sumDigits(num) {
    if (num < 10) {
        return num;
    }

    const digits = num.toString().split('');

    const subtotal = digits.reduce((sum, digit) => sum + parseInt(digit), 0);

    return sumDigits(subtotal);
}

module.exports = sumDigits;
