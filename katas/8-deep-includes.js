function deepIncludes(arr, chosenValue) {
    let isChosenValue = false;

    for (let i = 0; i < arr.length; i++) {
        if ( Array.isArray(arr[i]) ) {
            isChosenValue = deepIncludes(arr[i], chosenValue);
        } else if (arr[i] === chosenValue) {
            return true;
        }
    }
    
    return isChosenValue;
}

module.exports = deepIncludes;
