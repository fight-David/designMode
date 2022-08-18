function loadImg(src) {
    return new Promise((resolve, reject) => {
        let img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject('图片加载失败')
        }
        img.src = src
    })
}

let src = `https://pics1.baidu.com/feed/1b4c510fd9f9d72aac12e863f535bd3d349bbb07?token=b74904666e9642aff6fbc6a7b42cbd92&f=jpeg`
let result = loadImg(src)
// promise 内部状态变化，内部机制 ，之前收集的then会一条一条的触发
result.then(function (img) {
    // part1
    alert(`width:${img.width}`)
    return img
}).then(function (img) {
    // part2
    alert(`height:${img.height}`)
    return img
}).then(function (img) {
    // part3
    alert(`${img.src}`)
}).catch(function (ex) {
    alert(ex)
})