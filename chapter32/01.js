var A = {};
// 添加事件绑定方法 on
A.on = function (dom, type, fn) {
  // 如果支持addEventListener 方法
  if (document.addEventListener) {
    // 返回新定义方法
    return function (dom, type, fn) {
      dom.addEventListener(type, fn ,false);
    }
  // 如果支持 attachEvent 方法（IE）
  } else if (document.attachEvent) {
    // 返回新定义方法
    return function (dom, type, fn) {
      dom.attachEvent('on' + type, fn);
    }
  // 定义 on 方法
  } else {
    // 返回新定义方法
    return function (dom, type, fn) {
      dom['on' + type] = fn;
    }
  }
}();