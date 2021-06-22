// 函数柯里化
function curry(fn) {
  // 缓存数组 slice 方法 Array.prototype.slice
  var Slice = [].slice();
  // 从第二个参数开始截取参数
  var args = Slice.call(arguments, 1);
  // 闭包返回新函数
  return function () {
    // 将参数(类数组)转化为数组
    var addArgs = Slice.call(arguments),
      // 拼接参数
      allArgs = args.concat(addArgs);
    // 返回新函数
    return fn.apply(null, allArgs);
  }
}