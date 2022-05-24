const deepClone = (obj: object) => {
    return JSON.parse(JSON.stringify(obj))
}

export {
    deepClone
}