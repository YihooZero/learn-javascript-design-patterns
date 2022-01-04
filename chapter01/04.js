var CheckObject = function() {};
CheckObject.prototype.checkName = function () {
// 验证姓名
}
CheckObject.prototype.checkEmail = function () {
// 验证邮箱
}
CheckObject.prototype.checkPassword = function () {
// 验证密码
}

// 上面的方法可以简写如下
var CheckObject1 = function () {};
CheckObject1.prototype = {
  checkName: function () {
  // 验证姓名
  },
  checkEmail: function () {
  // 验证邮箱
  },
  checkPassword: function () {
  // 验证密码
  }
};

var a =new CheckObject();
a.checkName();
a.checkEmail();
a.checkPassword();