// 状态 (红/绿/蓝 灯)
class State {
    constructor(color) {
        this.color = color
    }
    handle(context) {
        console.log(`turn to ${this.color} light`);
        // 设置状态
        context.setState(this)
    }
}

// 主题
class Context {
    constructor() {
        this.state = null
    }
    setState(state) {
        this.state = state
    }
    getState() {
        return this.state
    }
}


// 测试代码
// 红绿灯 都在一个杆上面
let context = new Context()

let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')

// 绿灯亮了
green.handle(context)
console.log(context.getState())
// 黄灯亮了
yellow.handle(context)
console.log(context.getState())
// 红灯亮了
red.handle(context)
console.log(context.getState())
