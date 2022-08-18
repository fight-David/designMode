class People {
  name
  age
  protected weight // 受保护的属性，只有自己或者子类才能访问
  constructor(name: String, age: Number) {
    this.name = name
    this.age = age
    this.weight = 120
  }
  eat() {
    alert(`${this.name} eat something`)
  }
  speak() {
    alert(`My name is ${this.name}, age ${this.age}`)
  }
}

class Student extends People {
  number
  private girlfriend
  constructor(name: String, age: Number, number: String) {
    super(name, age)
    this.number = number
    this.girlfriend = 'xiaoli'
  }
  study() {
    alert(`${this.name} study`)
  }
  getWeight() {
    alert(`${this.weight} weight`)
  }
}

let xiaoming = new Student('xiaoming', 10, 'A1')

xiaoming.getWeight()

alert(xiaoming.girlfriend)
alert(xiaoming.weight)



// 封装：示例ts
// 减少耦合，不该外露的不外露
// 利于数据、接口的权限管理
// es6 目前不支持，一般认为， _开头的属性是private