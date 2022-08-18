// es7 装饰器

// core-decorators 
// 首先安装 npm i core-decorators --save

import {
    readonly
} from 'core-decorators'

class Person {
    @readonly
    name() {
        return 'zhang'
    }
}

let p = new Person()
console.log(p.name());
p.name = function () {} // 此处会报错