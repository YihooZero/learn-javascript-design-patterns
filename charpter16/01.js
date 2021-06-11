// 模板类 基础提示框 data 渲染数据
var Alert = function (data) {
  // 没有数据则返回，防止后面程序执行
  if (!data) return;
  // 设置内容
  this.content = data.content;
  // 创建提示框面板
  this.pannel = document.createElement('div');
  // 创建提示内容组件
  this.contentNode = document.createElement('p');
  // 创建确定按钮组件
  this.confirmBtn = document.createElement('span');
  // 创建关闭按钮组件
  this.closeBtn =document.createElement('b');
  // 为提示框面板添加类
  this.pannel.className = 'alert';
  // 为关闭按钮添加类
  this.closeBtn.className = 'a-close';
  // 为确定按钮添加类
  this.confirmBtn.className = 'a-confirm';
  // 为确定按钮添加文案
  this.confirmBtn.innerHTML = data.confirm || '确认';
  // 为提示内容添加文本
  this.contentNode.innerHTML = this.content;
  // 点击确定按钮执行方法 如果data中有success方法则为success方法，否则为空函数
  this.success = data.success || function() {};
  // 点击关闭按钮执行方法
  this.fail = data.fail || function() {};
}

// 提示框原型方法
Alert.prototype = {
  // 创建方法
  init: function () {
    // 生成提示框
    this.pannel.appendChild(this.closeBtn);
    this.pannel.appendChild(this.contentNode);
    this.pannel.appendChild(this.confirmBtn);
    // 插入页面中
    document.body.appendChild(this.pannel);
    // 绑定事件
    this.bindEvent();
    // 显示提示框
    this.show();
  },
  bindEvent: function () {
    var me = this;
    // 关闭按钮点击事件
    this.closeBtn.onclick = function () {
      // 执行关闭取消方法
      me.fail();
      // 隐藏弹层
      me.hide();
    };
    // 确认按钮点击事件
    this.confirmBtn.onclick = function () {
      // 执行关闭确认方法
      me.success();
      // 隐藏弹层
      me.hide();
    }
  },
  // 隐藏弹层方法
  hide: function() {
    this.pannel.style.display = 'none';
  },
  show: function () {
    this.pannel.style.display = 'block';
  }
}

// 右侧按钮提示框
var RightAlert = function (data) {
  // 继承基本提示框构造函数
  Alert.call(this, data);
  // 为确认按钮添加 right 类设置位置居右
  this.confirmBtn.className = this.confirmBtn.className + ' right';
};
// 继承基本提示框方法
RightAlert.prototype = new Alert();

// 标题提示框
var TitleAlert = function (data) {
  // 继承基本提示框构造函数
  Alert.call(this, data);
  // 设置标题内容
  this.title = data.title;
  // 创建标题组件
  this.titleNode = document.createElement('h3');
  // 标题组件中写入标题内容
  this.titleNode.innerHTML = this.title;
};
// 继承基本提示框方法
TitleAlert.prototype = new Alert();
// 对基本提示框创建方法拓展
TitleAlert.prototype.init = function () {
  // 插入标题
  this.pannel.insertBefore(this.titleNode, this.pannel.firstChild);
  // 继承基本提示框init 方法
  Alert.prototype.init.call(this);
}

// 带有取消按钮的弹出框
var CancelAlert = function (data) {
  // 继承标题提示框构造函数
  TitleAlert.call(this, data);
  // 取消按钮文案
  this.cancel = data.cancel;
  // 创建取消按钮
  this.cancelBtn = document.createElement('apan');
  // 为取消按钮添加类
  this.cancelBtn.className = 'cancel';
  // 设置取消按钮内容
  this.cancelBtn.innerHTML = this.cancel || '取消';
};
// 继承标题提示框原型方法
CancelAlert.prototype = new Alert();
CancelAlert.prototype.init = function () {
  // 继承标题提示框创建方法
  TitleAlert.prototype.init.call(this);
  // 由于取消按钮要添加在末尾，所以在创建其他组件后添加
  this.pannel.appendChild(this.cancelBtn);
}
CancelAlert.prototype.bindEvent = function () {
  var me = this;
}