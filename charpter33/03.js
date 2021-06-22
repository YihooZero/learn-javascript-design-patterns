// bind 兼容方法
if (Function.prototype.bind === undefined) {
  Function.prototype.bind = function (context) {
    // 缓存数组slice方法
    var Slice = Array.prototype.slice,
      // 从第二个参数截取参数
      args = Slice.call(arguments, 1),
      // 保存当前函数引用
      that = this;
    // 返回新函数
    return function () {
      // 将参数数组化
      var addArgs = Slice.call(arguments),
        // 拼接参数
        allArgs = args.concat(addArgs);
      // 对当前函数装饰并返回
      return that.apply(context, allArgs);
    }
  }
}