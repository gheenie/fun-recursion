function deepFreeze(obj) {
    Object.freeze(obj)
    for (let key in obj){
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            deepFreeze(obj[key])
        }
    }
}

module.exports = deepFreeze