function num(base) {
    return function() {
        let list = arguments.length ? arguments[0] : []
        if (!Array.isArray(list)) {
            throw Error('参数类型错误')
        }
        list.unshift(base)
        return list
    }
}
const one = num(1)
const two = num(2)
// 减法
function sub() {
    const list = arguments.length ? arguments[0] : []
    if (!Array.isArray(list)) {
        throw Error('参数类型错误')
    }
    const result = list.reduce((pre, next) => {
        return pre - next
    })
    console.log(result)
    return result
}
sub(two(one())) // 2 - 1 打印 1
sub(one(two())) // 1 - 2 打印 -1
sub(two(one(one()))) // 2 - 1 - 1 打印 0
sub(two(one(one(two())))) // 2 - 1 - 1 -2打印 -2
