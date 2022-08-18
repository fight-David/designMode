class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(selector))
        let len = dom ? dom.length : 0
        for (let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }
    append(node) {

    }
    addClass(name) {

    }
    html(data) {

    }
    // 此处省略若干 API
}
window.$ = function (selector) {
    return new jQuery(selector)
}

// 为什么要使用面向对象

// 程序执行：顺序、判断、循环 —— 结构话
// 面向对象 —— 数据结构化
// 对于计算机，结构化的才是最简单的
// 编程应该简单 & 抽象