function sumDigits(num) {
    if (num < 10) {
        return num
    }
    const numArr = num.toString().split('')
    const total = numArr.reduce((sumTotal, number) => {
        return parseInt(number) + sumTotal
    }, 0)
    return sumDigits(total)
}

module.exports = sumDigits;
