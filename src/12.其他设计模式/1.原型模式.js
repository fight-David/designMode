// 一个原型 对象
let prototype = {
    getName: function () {
        return this.first + ' ' + this.last
    },
    say: function () {
        alert('hello')
    }
}

// 基于原型创建x
let x = Object.create(prototype)
x.first = 'A'
x.last = 'B'
alert(x.getName())
x.say()

// 基于原型创建y
let y = Object.create(prototype)
y.first = 'C'
y.last = 'D'
alert(y.getName())
y.say()