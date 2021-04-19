const _filter = function (arr, fun) {
    if (!Array.isArray(arr)) {
        throw error('arr不是数组')
    }
    if (arr.length === 0) return [];
    return arr.reduce((pre, next, index) => {
        if(fun.call(arr, next, index, arr)) {
            pre.push(next)
        }
        return pre
    }, [])
}
console.log(_filter([2, 2, 3, 1], (item) => {
    return item > 2
}))