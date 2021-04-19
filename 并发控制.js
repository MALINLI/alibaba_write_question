function limitLoad(urls, handler, limit) {
    const sequence = [].concat(urls)
    let promises = [];
    promises = sequence.splice(0, limit).map((url, index) => {
        return handler(url, index)
    });
    return sequence.reduce((last, url, cunrrentIndex) => {
        return last.then(() => {
            return Promise.race(promises)
        }).catch(err => {
            console.error(err)
        }).then((res) => {
            promises.push(handler(url, cunrrentIndex));
        })
    }, Promise.resolve()).then(() => {
        return Promise.all(promises)
    })
}