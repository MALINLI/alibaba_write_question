/*实现⼀个前端缓存模块，主要⽤于缓存 xhr 返回的结果，避免多余的⽹络请求浪费，要求：
⽣命周期为⼀次⻚⾯打开
如果有相同的请求同时并⾏发起，要求其中⼀个能挂起并且等待另外⼀个请求返回并读取该缓存

【思路：
1.使用sessionStorage存储dataCatch
2.dataCatch存储结构如下：
dataCatch: {
    'url': {
        data: data,
        status: 'pedding' || 'success' || 'fail',
        successCbs: [],
        failCbs: []
    }
}
3.fail状态或者没有该url请求对象，则发起请求
4.pedding状态缓存回调函数，在请求结果成功或者失败时调用
5.success状态至今返回存储的结果
】
*/

function cacheRequest(url, successCb, failCb) {
    let dataCatch = JSON.parse(sessionStorage.getItem('dataCatch')) ||{};
    const current = dataCatch[url]
    if(!current || current.status === 'fail') {
        dataCatch[url]  = {
            data: null,
            status: 'pedding',
            successCbs: [],
            failCbs: []
        }
        request(url,(res) => {
            dataCatch[url].data = res;
            dataCatch[url].status = 'success'
            successCb(res)
            while(dataCatch[url].successCbs.length) {dataCatch[url].successCbs.shift()(res) }
            dataCatch[url].failCbs = []
        }, (err) => {
            dataCatch[url].status = 'fail'
            failCb(err)
            while(dataCatch[url].failCbs.length) {dataCatch[url].failCbs.shift()(err) }
            dataCatch[url].successCbs = []
        })
        .finally(() => {
            sessionStorage.setItem('dataCatch', JSON.stringify(dataCatch))
        })
    }
    if(current.status === 'pedding') {
        dataCatch[url].successCbs.push(successCb)
        dataCatch[url].failCbs.push(failCb)
        return
    }
    return current.data
}