var LazySingle = (function () {
  // 单例实例引用
  var _instance = null;
  // 单例
  function Single() {
    // 这里定义私有属性和方法
    return {
      publicMethod: function() {},
      publicProperty: '1.0'
    }
  }
  // 获取单例对象接口
  return function () {
    if (!_instance) {
      _instance = Single()
    }
    return _instance;
  }
})();

console.log(LazySingle().publicProperty);