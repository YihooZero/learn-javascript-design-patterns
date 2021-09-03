// 外观模式，简化获取元素
function $(id) {
  return document.getElementById(id);
}

// 工程师A
(function () {
  // 追加一条消息
  function addMsgItem(e) {
    var text = e.args.text,
      ul = $('img'),
      li = document.createElement('li'),
      span = document.createElement('span');
    li.innerHTML = text;
    span.onclick = function () {
      ul.removeChild(li);
      // 发布删除留言信息
      Observer.fire('removeCommentMessage', {
        num: -1
      })
    }
    li.appendChild(span);
    ul.appendChild(li);
  }
  // 注册添加评论信息
  Observer.register('addCommentMessage', addMsgItem)
})()

// 工程师B
(function () {
  // 更改用户消息数目
  function changeMsgNum(e) {
    // 获取需要增加的用户消息数目
    var num = e.args.num;
    // 增加用户消息数目并写入页面中
    $('msg_num').innerHTML = parseInt($('msg_num').innerHTML) + num;
  }
  // 注册添加评论信息
  Observer
    .register('addCommentMessage', changeMsgNum)
    .register('removeCommentMessage', changeMsgNum);
})()

// 工程师C
(function () {
  // 用户点击提交按钮
  $('user_submit').onclick = function () {
    // 获取用户输入框中输入的信息
    var text = $('user_input');
    if (text.value === '') return;
    // 发布一则评论消息
    Observer.fire('addCommentMessage', {
      text: text.value,
      num: 1
    });
    text.value = '';
  }
})()