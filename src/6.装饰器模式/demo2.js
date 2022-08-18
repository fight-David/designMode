// es7 装饰器
// 要安装插件 ： babel-plugin-transform-decorators-legacy
// 装饰类
@testDec
class Demo {

}

function testDec(target) {
    target.isDec = true
}

alert(Demo.isDec)