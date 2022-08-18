// 原本画个颜色图形是：
class ColorShape {
    yellowCircle() {
        console.log('yellow circle');
    }
    redCircle() {
        console.log('red circle');
    }
    yellowTriangle() {
        console.log('yellow triangle');
    }
    redTriangle() {
        console.log('red triangle');
    }
}
// test
let cs = new ColorShape()
cs.yellowCircle()
cs.redCircle()
cs.yellowTriangle()
cs.redTriangle()

// color定义一个类，图形定义一个类，进行复用，便于扩展
class Color {
    constructor(name) {
        this.name = name
    }
}
class Shape {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    draw() {
        console.log(`${this.color.name} ${this.name}`);
    }
}
// test
let red = new Color('red')
let yellow = new Color('yellow')
let circle = new Shape('circle', red)
circle.draw()
let triangle = new Shape('triangle', yellow)
triangle.draw()