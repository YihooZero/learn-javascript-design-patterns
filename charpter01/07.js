Function.prototype.addMethod = function (name, fn) {
  this[name] = fn;
  return this;
};

var method = function() {};
method.addMethod('checkName', function () {
  // 校验姓名
  return this;
}).addMethod('checkEmail', function () {
  // 校验邮箱
  return this;
}).addMethod('checkPassword', function () {
  // 校验密码
  return this;
});

method.checkName().checkEmail().checkPassword();