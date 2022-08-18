// ajax

// 自己封装的 ajax，使用方式如下：
ajax({
        url: '/getData',
        type: 'Post',
        dataType: 'json',
        data: {
            id: "123"
        }
    })
    .done(function () {})

// 但是因为历史原因，代码中全是：
// $.ajax({...})

// 做一层适配器

var $ = {
    ajax: function (options) {
        return ajax(options)
    }
}