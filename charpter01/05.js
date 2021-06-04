var CheckObject = {
  checkName: function () {
    // 校验姓名
    return this;
  },
  checkEmail: function () {
    //  校验邮箱
    return this;
  },
  checkPassword: function () {
    //  校验密码
    return this;
  }
};

CheckObject.checkName().checkEmail().checkPassword();

//类的原型对象也可以实现链式操作
var CheckObject1 = function () {};
CheckObject1.prototype = {
  checkName: function () {
    // 校验姓名
    return this;
  },
  checkEmail: function () {
    // 校验邮箱
    return this;
  },
  checkPassword: function () {
    // 校验密码
    return this;
  }
};

var a = new CheckObject1();
a.checkName().checkEmail().checkPassword();