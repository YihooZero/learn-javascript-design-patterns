A.event.on = function (dom, type, fn, data) {
  // w3c 标准事件绑定
  if (dom.addEventListener) {
    dom.addEventListener(type, function (e) {
      // 在 dom 环境中调用 fn, 并传入事件对象与data数据参数
      fn.call(dom, e, data);
    }, false)
  }
}