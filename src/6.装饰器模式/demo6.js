// es7 装饰器

// 装饰函数  日志
function log(target, name, descriptor) {
    let oldValue = descriptor.value

    descriptor.value = function () {
        console.log(`calling ${name} width`, arguments)
        return oldValue.apply(this, arguments)
    }
    return descriptor
}


class Math {
    @log
    add(a, b) {
        return a + b // 执行 add 时，会自动打印日志，因为有 @log 装饰器
    }
}


let math = new Math()
const result = math.add(2, 4)
console.log('result', result);