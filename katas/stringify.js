function stringify(arg) {
    if (Object.keys(arg).length === 0) return '{}';

    if (typeof arg === 'object' && !Array.isArray(arg)) {
        let builtString = '{';

        for (const key in arg) {
            if (typeof arg[key] === 'object') {
                builtString += `"${key}":`
                builtString += stringify(arg[key]) + '}';
            } else {
                builtString += `"${key}":${arg[key]},`;
            }
        }

        return builtString.slice(0, -1) + '}';
    }

    if ( Array.isArray(arg) ) {
        let builtString = '[';

        for (let i = 0; i < arg.length; i++) {
            if ( Array.isArray(arg[i]) ) {
                builtString += `"${arg[i]}",`
                builtString += stringify(arg[key]) + ']';
            } else {
                builtString += `"${key}":${arg[key]},`;
            }
        }

        return builtString.slice(0, -1) + '}';
    }
}

module.exports = stringify;
