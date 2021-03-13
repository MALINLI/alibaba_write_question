// •  写一个弹窗组件，有一个展示区域和关闭按钮，不要求样式，但需要提供测试用例。参考：
// • https://ant.design/components/modal-cn/#header
// • https://getbootstrap.com/docs/4.2/components/modal/#live-demo -->


function Modal(opts) {
    this.opts = this.extend(this.defaults, opts);
    this.init();
}

Modal.prototype.defaults = {
    target: null,
    width: 500,
    height: 300,
    title: '',
    content: '',
    cancel: null,
    confirm: null,
};

Modal.prototype.extend = function (dest, src) {
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            dest[prop] = src[prop];
        }
    }
    return dest;
};

Modal.prototype.template = function() {
    var title = "<div class='modal-header'>" + this.opts.title + "<div id='modal-close'>&times;</div></div>";
    var content = "<div class='modal-content'>" + this.opts.content + "</div>";
    var footer = "<div class='modal-footer'><button id='modal-ok'>确定</button><button id='modal-cancel'>取消</button></div>";

    var _Modal = document.createElement("div");
    _Modal.setAttribute("id", "modal");
    _Modal.innerHTML = `<div class='modal-mask'></div><div class='modal-inner' style='width: ${this.opts.width}px; margin-left: ${-this.opts.width/2}px; height: ${this.opts.height}px; margin-top: ${-this.opts.height/2}px '>` + title + content + footer + "</div>";

    return _Modal;
};

Modal.prototype.bindEvents = function() {
    var _Modal = document.getElementById("modal");

    document.getElementById("modal-close").addEventListener("click", (e) => {
        e.preventDefault();
        typeof  this.opts.cancel === 'function' && this.opts.cancel();
        _Modal.style.display = "none";
        _Modal.remove()
        document.removeEventListener('click')
    });

    document.getElementById("modal-ok").addEventListener("click", (e) => {
        e.preventDefault();
        typeof  this.opts.confirm === 'function' && this.opts.confirm();
        _Modal.style.display = "none";
        _Modal.remove()
        document.removeEventListener('click')
    });
    
    document.getElementById("modal-cancel").addEventListener("click", (e) => {
        e.preventDefault();
        typeof  this.opts.cancel === 'function' && this.opts.cancel();
        _Modal.style.display = "none";
        _Modal.remove()
        document.removeEventListener('click')
    });
};

Modal.prototype.init = function() {
    var layout = this.template();
    document.body.appendChild(layout);
    this.bindEvents();
};

(function (window) {
    window.Modal = Modal;
}(window));
