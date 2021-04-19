const _map = function (arr, fun) {
    if (!Array.isArray(arr)) {
        throw error('arr不是数组')
    }
    if (arr.length === 0) return [];
    return arr.reduce((pre, next, index) => {
        pre.push(fun.call(arr, next, index, arr))
        return pre
    }, [])
}
console.log(_map([2, 2, 3, 1], (item) => {
    return item + 1
}))