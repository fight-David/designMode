// es7 装饰器
// 版本过期 提示用户
// core-decorators 
// 首先安装 npm i core-decorators --save

import {
    deprecate
} from 'core-decorators'

class Person {
    @deprecate
    facepalm() {}

    @deprecate('We stopped facepalming')
    facepalmHard() {}

    @deprecate('We stopped facepalming', {
        url: 'http://knowyourmeme.com/memes/facepalm'
    })
    facepalmHarder() {}
}

let person = new Person()

person.facepalm()
// DEPRECATION Person#facepalm: This function will be removed in future versions.

person.facepalmHard()
// DEPRECATION Person#facepalmHard: We stopped facepalming

person.facepalmHarder()
// DEPRECATION Person#facepalmHarder: We stopped facepalming
// 
// See http://knowyourmeme.com/memes/facepalm for more details.