// 利用闭包实现
var Book = (function () {
  // 静态私有变量
  var bookNum = 0;
  // 静态私有方法
  function checkName(name) {}
  // 返回构造函数
  return function (newId, newName, newPrice) {
    // 私有变量
    var name, price;
    // 私有方法
    function checkId(id) {}
    // 特权方法
    this.getName = function () {}
    this.getPrice = function () {}
    this.setName = function () {}
    this.setPrice = function () {}
    // 共有属性
    this.id = newId;
    // 共有方法
    this.copy = function() {};
    bookNum++;
    if (bookNum > 100) {
      throw new Error('我们仅出版100本书.')
    }
    // 构造器
    this.setName(name);
    this.setPrice(price);
  }
})();

Book.prototype = {
  // 静态共有属性
  isJSBook: false,
  // 静态共有方法
  display: function() {}
}