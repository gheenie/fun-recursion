/* push way

function analyseArray() {
    const results = [];

    function firstGenericFunc(str, arr) {
        for (let i = 0; i < arr.length; i++) {
            if ( Array.isArray(arr[i]) ) {
                firstGenericFunc(`${str}.${i}`, arr[i]);
            } else {
                results.push(`${str}.${i}: ${arr[i]}`);
            }
        }

        return results;
    }

    return firstGenericFunc;
}*/

/* console.log() way */

function analyseArray(str, arr) {
    for (let i = 0; i < arr.length; i++) {
        if ( Array.isArray(arr[i]) ) {
            analyseArray(`${str}.${i}`, arr[i]);
        } else {
            console.log(`${str}.${i}: ${arr[i]}`);
        }
    }
}

module.exports = analyseArray;
