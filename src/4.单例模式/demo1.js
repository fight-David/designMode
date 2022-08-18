class SingleObject {
    login() {
        console.log('login...')
    }
}
// 静态方法 无论 SingleObject 被 new多少个，这个getInstance方法也只有一个
SingleObject.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance
    }
})()

// 测试:主义这里只能使用静态函数 getInstance，不能 new SingleObject()  ！！！
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2)

console.log(`-------------`);

let obj3 = new SingleObject() // 无法完全控制
obj3.login()
console.log(obj1 === obj3);