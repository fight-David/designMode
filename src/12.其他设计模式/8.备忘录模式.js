// 备忘类
class Memento {
    constructor(content) {
        this.content = content
    }
    getContent() {
        return this.content
    }
}

// 备忘列表
class CareTaker {
    constructor() {
        this.list = []
    }
    add(memento) {
        this.list.push(memento)
    }
    get(index) {
        return this.list[index]
    }
}

// 编辑器
class Editor {
    constructor() {
        this.content = null
    }
    setContent(content) {
        this.content = content
    }
    getContent() {
        return this.content
    }
    saveContentMemento() {
        return new Memento(this.content)
    }
    getContentFromMemento(memento) {
        this.content = memento.getContent()
    }
}


// test
let editor = new Editor()
let careTaker = new CareTaker()
editor.setContent('111')
editor.setContent('222')
careTaker.add(editor.saveContentMemento()) // 存储备忘录
editor.setContent('333')
careTaker.add(editor.saveContentMemento()) // 存储备忘录
editor.setContent('444')


console.log(editor.getContent());
editor.getContentFromMemento(careTaker.get(1)) // 撤销
console.log(editor.getContent());
editor.getContentFromMemento(careTaker.get(0)) // 撤销
console.log(editor.getContent());