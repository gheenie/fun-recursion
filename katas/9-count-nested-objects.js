function countNestedObjects(obj) {
    let count = 1;

    for ( const [key, value] of Object.entries(obj) ) {
        if ( typeof value === 'object' && !Array.isArray(value) ) {
            count += countNestedObjects(value);
        } 
    }
    
    return count
}

module.exports = countNestedObjects;
