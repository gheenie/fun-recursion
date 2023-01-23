function deepFreeze(obj) {
    Object.freeze(obj);

    for ( const [key, value] of Object.entries(obj) ) {
        
        if ( typeof value === 'object' && !Array.isArray(value) ) {
            deepFreeze(obj[key]);
        }
    }
}

module.exports = deepFreeze;
