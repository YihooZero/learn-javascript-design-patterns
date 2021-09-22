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

// 学生类
var Student = function (result) {
  var that = this;
  // 学生回答结果
  that.result = result;
  // 学生回答问题动作
  that.say = function () {
    console.log(that.result)
  }
};

// 回答问题方法
Student.prototype.answer = function (question) {
  // 注册参数问题
  Observer.register(question, this.say)
}

// 学生呼呼睡觉，此时不能回答问题
Student.prototype.sleep = function (question) {
  console.log(this.result + ' ' + question + ' 已被注销')
  // 取消对老师问题的监听
  Observer.remove(question, this.say);
}

// 教师类
var Teacher = function() {};
// 教师提问问题的方法
Teacher.prototype.ask = function (question) {
  console.log('问题是：' + question)
  // 发布提问消息
  Observer.fire(question)
}

var student1 = new Student('学生1回答问题'),
  student2 = new Student('学生2回答问题'),
  student3 = new Student('学生3回答问题');

student1.answer('什么是设计模式');
student1.answer('简述观察者模式');
student2.answer('什么是设计模式');
student3.answer('什么是设计模式');
student3.answer('简述观察者模式');

student3.sleep('简述观察者模式');

var teacher = new Teacher();

teacher.ask('什么是设计模式');
teacher.ask('简述观察者模式');