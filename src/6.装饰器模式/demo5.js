// es7 装饰器

// 装饰函数 只读

function readonly(target, name, descriptor) {
    // target : class 类
    // name : 方法名
    // descriptor : 属性描述对象 (Object.defineProperty 中会用到)，原来的值如下 
    console.log(target);
    console.log(name);
    console.log(descriptor);
    descriptor.writable = false
    return descriptor
}

class Person {
    constructor() {
        this.first = 'A'
        this.last = 'B'
    }

    @readonly
    name() {
        return `${this.first,this.last}`
    }
}


let p = new Person()
console.log(p.name);
// p.name = function () {}