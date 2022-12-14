// 写一个简单的promise
import StateMachine from "javascript-state-machine";

// 模型
var fsm = new StateMachine({
    init: 'pending',
    transitions: [{
            name: 'resolve',
            from: 'pending',
            to: 'fullfilled'
        },
        {
            name: 'reject',
            from: 'pending',
            to: 'rejected'
        }
    ],
    methods: {
        // 成功
        onResolve: function (state, data) {
            // 参数：state - 当前状态示例; data - fsm.resolve(xxx) 执行时传递过来的参数
            data.successList.forEach(fn => fn())
        },
        // 失败
        onReject: function (state, data) {
            // 参数：state - 当前状态示例; data - fsm.reject(xxx) 执行时传递过来的参数
            data.failList.forEach(fn => fn())
        }
    }
})

// 定义 Promise
class MyPromise {
    constructor(fn) {
        this.successList = []
        this.failList = []

        fn(() => {
            // resolve 函数
            fsm.resolve(this)
        }, () => {
            // reject 函数 
            fsm.reject(this)
        })
    }
    then(successFn, failFn) {
        this.successList.push(successFn)
        this.failList.push(failFn)
    }
}

// 测试代码
function loadImg(src) {
    const promise = new MyPromise(function (resolve, reject) {
        var img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject()
        }
        img.src = src
    })
    return promise
}
var src = 'http://www.imooc.com/static/img/index/logo_new.png'
var result = loadImg(src)
console.log(result)

result.then(function (img) {
    console.log('success 1')
}, function () {
    console.log('failed 1')
})
result.then(function (img) {
    console.log('success 2')
}, function () {
    console.log('failed 2')
})