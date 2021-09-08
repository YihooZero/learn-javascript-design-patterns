// 多继承
var mix = function () {
  var i = 1,                   // 从第二个参数起为被继承的对象
    len = arguments.length,    // 获取参数长度
    target = arguments[0],     // 第一个对象为目标对象
    arg;                       // 缓存参数对象
  // 遍历被继承的对象
  for (; i < len; i++) {
    // 缓存当前对象
    arg = arguments[i];
    // 遍历被继承对象中的属性
    for (const property in arg) {
      // 将被继承对象中的属性复制到目标对象中
      target[property] = arg[property];
    }
  }
  // 返回目标对象
  return target;
}

// 多继承绑定到原生对象Object上
Object.prototype.mix = function () {
  var i = 0,                   // 从第一个参数起为被继承的对象
    len = arguments.length,    // 获取参数长度
    arg;                       // 缓存参数对象
  // 遍历被继承的对象
  for (; i < len; i++) {
    // 缓存当前对象
    arg = arguments[i];
    // 遍历被继承对象中的属性
    for (const property in arg) {
      // 将被继承对象中的属性复制到目标对象中
      this[property] = arg[property];
    }
  }
}

var book1 = {
  name: 'JavaScript 设计模式',
  alike: ['css', 'html', 'JavaScript']
};

var book2 = {
  selfProperty: 'abc'
}

var otherBook = {
  color: 'blue'
};

otherBook.mix(book1, book2);
console.log(otherBook);