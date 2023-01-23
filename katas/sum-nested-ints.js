function sumNestedInts(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if ( Array.isArray(arr[i]) ) {
            sum += sumNestedInts(arr[i]);
        } else {
            sum += arr[i];
        }
    }
    
    return sum;
}

module.exports = sumNestedInts;
