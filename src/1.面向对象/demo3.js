class People {
    constructor(name) {
        this.name = name
    }
    saySomething() {

    }
}
class A extends People {
    constructor(name) {
        super(name)
    }
    saySomething() {
        alert('I am A')
    }
}
class B extends People {
    constructor(name) {
        super(name)
    }
    saySomething() {
        alert('I am B')
    }
}
let a = new A('a')
a.saySomething()
let b = new B('b')
b.saySomething()

// 封装（可以把一些属性，方法封装起来，不能让子类看等）
// static 定义的方法属性不能被继承
// 保持子类的开放性和灵活性
// 面向接口编程
// （js引用极少，了解即可）