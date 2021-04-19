function throttle(handler, wait) {
    wait = wait || 300;
    var lastTime = 0;
    return function () {
        var _self = this,
            _args = arguments;
        var nowTime = new Date().getTime();
        if ((nowTime - lastTime) > wait) {
            console.log('nowTime')
            handler.apply(_self, _args);
            lastTime = nowTime;
        }
    }
}