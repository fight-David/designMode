// es7 装饰器

// 可以加参数
function testDec(isDec) {
    return function (target) {
        target.isDec = isDec
    }
}

@testDec(false)
class Demo {

}


alert(Demo.isDec)