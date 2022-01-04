Function.prototype.addMethod = function (name, fn) {
  this.prototype[name] = fn;
  return this;
};

var Method = function() {};
Method.addMethod('checkName', function () {
  // 校验姓名
  return this;
}).addMethod('checkEmail', function () {
  // 校验邮箱
  return this;
}).addMethod('checkPassword', function () {
  // 校验密码
  return this;
});

var a = new Method();
a.checkName().checkEmail().checkPassword();