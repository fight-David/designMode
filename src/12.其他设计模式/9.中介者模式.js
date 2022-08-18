// a和b无论谁set谁，都不能直接去两者相互访问，而是通过中介者访问，（跟买房子卖房子中介差不多）
class A {
    constructor() {
        this.number = 0
    }
    setNumber(num, m) {
        this.number = num
        if (m) m.setB()
    }
}

class B {
    constructor() {
        this.number = 0
    }
    setNumber(num, m) {
        this.number = num
        if (m) m.setA()
    }
}

class Mediator {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    setA() {
        let number = this.b.number
        this.a.setNumber(number * 100)
    }
    setB() {
        let number = this.a.number
        this.b.setNumber(number / 100)
    }
}

// test
let a = new A()
let b = new B()
let m = new Mediator(a, b)
a.setNumber(100, m)
console.log(a.number, b.number);
b.setNumber(100, m)
console.log(a.number, b.number);