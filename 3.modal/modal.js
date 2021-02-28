function Overlay(opts) {
    this.opts = this.extend(this.defaults, opts);
    this.init();
}
Overlay.prototype.defaults = {
    target: null,
    width: 500,
    height: 300,
    title: '',
    content: ''
};

Overlay.prototype.extend = function (dest, src) {
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            dest[prop] = src[prop];
        }
    }

    return dest;
};

Overlay.prototype.template = function() {
    var title = "<div class='overlay-header'>" + this.opts.title + "<div id='overlay-close'>&times;</div></div>";
    var content = "<div class='overlay-content'>" + this.opts.content + "</div>";
    var footer = "<div class='overlay-footer'><button id='overlay-ok'>确定</button><button id='overlay-cancel'>取消</button></div>";

    var _Overlay = document.createElement("div");
    _Overlay.setAttribute("id", "Overlay");
    _Overlay.innerHTML = "<div class='overlay-mask'></div><div class='overlay-inner'>" + title + content + footer + "</div>";

    return _Overlay;
};

Overlay.prototype.bindEvents = function() {
    var _Overlay = document.getElementById("Overlay");

    document.getElementById("overlay-close").addEventListener("click", function(e) {
        e.preventDefault();
        _Overlay.style.display = "none";
    });
    document.getElementById("overlay-ok").addEventListener("click", function(e) {
        e.preventDefault();
        _Overlay.style.display = "none";
    });
    document.getElementById("overlay-cancel").addEventListener("click", function(e) {
        e.preventDefault();
        _Overlay.style.display = "none";
    });
};

Overlay.prototype.init = function() {
    var layout = this.template();

    if (this.opts.target) {
        document.body.appendChild(layout);
        document.querySelector(this.opts.target).addEventListener("click", function() {
            document.getElementById("Overlay").style.display = "block";
        });
    } else {
        document.body.appendChild(layout);
        document.body.addEventListener("click", function(e) {
            document.getElementById("Overlay").style.display = "block";
        });
    }

    this.bindEvents();
};

Overlay.prototype.width = function(val) {
    var width = document.getElementsByClassName("overlay-inner")[0];
    width.style.width = val + "px";
    width.style.marginLeft = -val / 2 + "px";

    return this;
};

Overlay.prototype.height = function(val) {
    var height = document.getElementsByClassName("overlay-inner")[0];
    height.style.height = val + "px";
    height.style.marginTop = -val / 2 + "px";

    return this;
};

(function (window) {
    window.Overlay = Overlay;
}(window));
