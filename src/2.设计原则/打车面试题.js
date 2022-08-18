// 打车时，可以打专车或者快车。任何车都有车牌号和名称。
// 不同车价格不同，快车每公里1元，专车每公里2元
// 行程开始时，显示车辆信息
// 行程结束时，显示打车金额（假定行程就5公里）

// UML类图 (https://processon.com/diagraming/61baefac0e3e740ea738f1cf)
// ES6 语法写出该示例

class Car {
    constructor(name, number) {
        this.name = name
        this.number = number
    }
}

// 快车
class Kuaiche extends Car {
    constructor(name, number, price) {
        super(name, number)
        this.price = price
    }
}

// 专车
class Zhuanche extends Car {
    constructor(name, number, price) {
        super(name, number)
        this.price = price
    }
}

// 行程
class Trip {
    constructor(car) {
        this.car = car
    }

    start() {
        console.log(`行程开始,名称:${this.car.name},车牌号:${this.car.number}`);
    }

    end() {
        console.log(`行程结束,金额:${this.car.price * 5}`);
    }
}

// 测试
let car = new Kuaiche('桑塔纳', 000000, 1)
let trip = new Trip(car)
trip.start()
trip.end()