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

        for (let i = 0; i < arg.length; i++) {
            if ( Array.isArray(arg[i]) ) {
                builtString += stringify(arg[i]) + ']';
            } else {
                console.log(typeof arg[i]);
                if (typeof arg[i] === 'string') {
                    builtString += `"${arg[i]}",`;
                } else {
                    builtString += `${arg[i]},`;
                }
                
            }
        }

        // remove the trailing comma
        return builtString.slice(0, -1) + ']';
    }
}

module.exports = stringify;
