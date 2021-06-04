// 类式继承
// 声明父类
function SuperClass() {
  this.superValue = true;
}

// 为父类添加共有方法
SuperClass.prototype.getSuperValue = function () {
  return this.superValue;
}

// 声明子类
function SubClass() {
  this.subValue = false;
}

// 继承父类
SubClass.prototype = new SuperClass();
// 为子类添加共有方法
SubClass.prototype.getSubValue = function () {
  return this.subValue;
}

var instance = new SubClass();
console.log(instance.getSubValue());    // false
conosle.log(instance.getSuperValue());  // true

console.log(instance instanceof SubClass);     // true
console.log(instance instanceof SuperClass);   // true
console.log(SubClass instanceof SuperClass);   // false