// es7 装饰器

// mixin 示例
function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}


const Foo = {
    foo() {
        alert('foo')
    }
}

@mixins(Foo)
class MyClass {}

let obj = new MyClass()
obj.foo() //