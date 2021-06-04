Function.prototype.addMethod = function (name, fn) {
  this[name] = fn;
};

var method = function() {};
method.addMethod('checkName', function () {
  // 校验姓名
});
method.addMethod('checkEmail', function () {
  // 校验邮箱
});
method.addMethod('checkPassword', function () {
  // 校验密码
});

method.checkName();
method.checkEmail();
method.checkPassword();