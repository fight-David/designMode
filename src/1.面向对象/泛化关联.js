class People {
    constructor(name, house) {
        this.name = name
        this.house = house
    }
    saySomething() {

    }
}
class A extends People {
    constructor(name, house) {
        super(name, house)
    }
    saySomething() {
        alert('I am A')
    }
}
class B extends People {
    constructor(name, house) {
        super(name, house)
    }
    saySomething() {
        alert('I am B')
    }
}

class House {
    constructor(city) {
        this.city = city
    }

    showCity() {
        alert(`house in ${this.city}`)
    }
}

let aHouse = new House('北京')
let a = new A('aaa', aHouse)
console.log(a); // a 有房子
let b = new B('bbb')
console.log(b); // 无 房子


// 泛化--继承
// 关联--引用
