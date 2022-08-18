// 有限状态机 - "收藏" 和 "取消"
import StateMachine from "javascript-state-machine";
import $ from 'jquery'
// 初始化状态机模型

var fsm = new StateMachine({
    init: '收藏', // 初始状态，待收藏
    transitions: [ // 变化机制
        {
            name: 'doStore',
            from: '收藏',
            to: '取消收藏'
        },
        {
            name: 'deleteStore',
            from: '取消收藏',
            to: '收藏'
        }
    ],
    methods: {
        // 执行收藏
        onDoStore: function () {
            alert('收藏成功')
            updateText()
        },
        // 取消收藏
        onDeleteStore: function () {
            alert('已取消收藏')
            updateText()
        }
    }
})

var $btn = $('#btn')

// 点击事件
$btn.click(function () {
    if (fsm.is('收藏')) {
        fsm.doStore()
    } else {
        fsm.deleteStore()
    }
})

// 更新文案
function updateText() {
    $btn.text(fsm.state)
}

// 初始化文案
updateText()