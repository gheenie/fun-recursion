function analyseArray() {
    const results = [];

    function helperFunc(str, arr) {
        for (let i = 0; i < arr.length; i++) {
            if ( Array.isArray(arr[i]) ) {
                helperFunc(`${str}.${i}`, arr[i]);
            } else {
                results.push(`${str}.${i}: ${arr[i]}`);
            }
        }

        return results;
    }

    return helperFunc;

    // console.log() way
    
    /*for (let i = 0; i < arr.length; i++) {
        if ( Array.isArray(arr[i]) ) {
            analyseArray(`${str}.${i}`, arr[i]);
        } else {
            console.log(`${str}.${i}: ${arr[i]}`);
        }
    }

    return results;*/
}

module.exports = analyseArray;
