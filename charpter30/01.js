function throttle() {
  // 获取第一个参数
  var isClear = arguments[0], fn;
  // 如果第一个参数是boolean类型，那么第一个参数则标识是否清除计时器
  if (typeof isClear === 'boolean') {
    // 第二个参数则为函数
    fn = arguments[1];
    // 函数的句柄存在，则清除该计时器
    fn.__throttleID && clearTimeout(fn.__throttleID);
    // 通过计时器延迟函数的执行
  } else {
    // 第一个参数为函数
    fn = isClear;
    // 第二个参数为函数执行时的参数
    param = arguments[1];
    // 对执行时的参数适配默认值
    var p = extend({
      context: null,
      args: [],
      time: 300
    }, param);
    // 清除执行函数计时器句柄
    arguments.callee(true, fn);
    // 为函数绑定计时器句柄，延迟执行函数
    fn.__throttleID = setTimeout(function () {
      // 执行函数
      fn.apply(p.context, p.args);
    }, p.time)
  }
}