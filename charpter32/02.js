var A = {};
// 添加事件绑定方法 on
A.on = function (dom, type, fn) {
  // 如果支持addEventListener 方法
  if (dom.addEventListener) {
    // 显示重定义 on 方法
    A.on = function (dom, type, fn) {
      dom.addEventListener(type, fn, false);
    }
  // 如果支持 attachEvent 方法（IE）
  } else if (document.attachEvent) {
    // 显示重定义 on 方法
    A.on = function (dom, type, fn) {
      dom.attachEvent('on' + type, fn);
    }
  // 如果支持 DOM0 级事件绑定
  } else {
    // 显示重定义 on 方法
    A.on = function (dom, type, fn) {
      dom['on' + type] = fn;
    }
  }
  // 执行重定义 on 方法
  A.on(dom, type, fn);
}