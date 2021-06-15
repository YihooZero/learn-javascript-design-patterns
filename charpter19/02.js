// 表单正则验证策略对象
var InputStrategy = function () {
  var strategy = {
    // 是否为空
    notNull: function (value) {
      return /\s+/.test(value) ? '请输入内容' : '';
    },
    // 是否是一个数字
    number: function (value) {
      return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字';
    },
    // 是否时本地电话
    phone: function (value) {
      return /^\d{3}\-\d{8}$|^\d{4}\-\d{7}$/.test(value) ? '' : '请输入正确的电话号码格式，如：010-12345678 或 0418-1234567';
    }
  };
  return {
    // 验证接口type算法value表单值
    check: function (type, value) {
      // 去除首尾空白符
      value = value.replace(/^\s+|\s+$/g, '');
      return strategy[type] ? strategy[type]() : '没有该类型的检测方法'
    },
    // 添加策略
    addStrategy: function (type, fn) {
      strategy[type] = fn;
    }
  }
}();

// 拓展 延伸算法
InputStrategy.addStrategy('nickname', function (value) {
  return /^[a-zA-Z]\w{3, 7}$/.test(value) ? '' : '请输入4-8位昵称，如：YYQH';
})

// 外观模式简化元素的获取
function $tag(tag, context) {
  context = context || document;
  return context.getElementsByTagName(tag);
}

// 提交按钮点击
$tag('input')[1].onclick = function () {
  // 获取输入框的内容
  var value = $tag('input')[0].value;
  // 获取日期格式验证结果
  $tag('span')[0].innerHTML = InputStrategy.check('nickname', value);
}