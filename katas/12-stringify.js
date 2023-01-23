function stringify(arg) {
    if ( typeof arg === 'object' && !Array.isArray(arg) ) {
        if ( Object.keys(arg).length === 0 ) return '{}';

        let builtString = '{';

        for ( const [key, value] of Object.entries(arg) ) {
            if (typeof value === 'object') {
                builtString += `"${key}"` + ':' + stringify(value) + '}';
            } else {
                builtString += `"${key}"` + ':' + value + ',';
            }
        }

        // remove the trailing comma
        return builtString.slice(0, -1) + '}';
    }

    if ( Array.isArray(arg) ) {
        if (arg.length === 0) return '[]';

        let builtString = '[';

        arg.forEach( (item) => {
            if ( Array.isArray(item) ) {
                builtString += stringify(item) + ']';
            } else {
                if (typeof item === 'string') {
                    builtString += `"${item}"`;
                } else {
                    builtString += item;
                }
                
                builtString += ',';
            }
        } );

        // remove the trailing comma
        return builtString.slice(0, -1) + ']';
    }
}

module.exports = stringify;
