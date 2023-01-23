function countNestedObjects(obj) {
    let count = 1;

    for (let key in obj) {
        if ( typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            count += countNestedObjects(obj[key]);
        } 
    }
    
    return count
}

module.exports = countNestedObjects;
