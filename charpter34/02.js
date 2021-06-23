// 长轮询
(function getAjaxData() {
  // 保存当前函数
  var fn = arguments.callee;
  setTimeout(function () {
    $.get('...', function () {
      console.log('轮询一次');
      // 再一次执行轮询
      fn();
    })
  }, 5000)
})()