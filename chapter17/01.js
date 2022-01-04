// 创建一个观察者
// 将观察者放在闭包中，当页面加载就立即执行
var Observer = (function () {
  // 防止消息队列暴露而被篡改故将消息容器作为静态私有变量保存
  var _message = {};
  return {
    // 注册信息接口
    register: function(type, fn) {
      // 如果此消息不存在则应该创建一个该消息类型
      if (typeof _message[type] === 'undefined') {
        // 将动作推入到该消息对应的动作执行队列中
        _message[type] = [fn];
      } else {
        // 将动作方法推入该消息对应的动作执行序列中
        _message[type].push(fn);
      }
      return Observer;
    },
    // 发布信息接口
    fire: function(type, args) {
      // 如果该消息没有被注册，则返回
      if (!_message[type]){
        return;
      }
      // 定义消息信息
      var events = {
        type,              // 消息类型
        args: args || {}   // 消息携带数据
      },
        i = 0,                       // 消息动作循环变量
        len = _message[type].length; // 消息动作长度
      // 遍历消息动作
      for (; i < len; i++) {
        // 依次执行注册的消息对应的动作序列
        _message[type][i].call(this, events);
      }
    },
    // 移除信息接口
    remove: function(type, fn) {
      // 如果消息动作队列存在
      if (_message[type] instanceof Array) {
        // 从最后一个消息动作遍历
        var i = _message[type].length - 1;
        for (; i >= 0; i--) {
          // 如果存在该动作则在消息动作序列中移除相应动作
          _message[type][i] === fn && _message[type].splice(i, 1);
        }
      }
    }
  }
})();

Observer.register('test', function (e) {
  console.log(e.type, e.args.msg);
});

Observer.fire('test', { msg: '传递参数' })