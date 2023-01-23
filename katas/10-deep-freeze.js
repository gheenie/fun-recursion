function deepFreeze(obj) {
    Object.freeze(obj);

    for (const [key, value] in obj) {

        if ( typeof value === 'object' && !Array.isArray(value) ) {
            deepFreeze(obj[key]);
        }
    }
}

module.exports = deepFreeze;
