// 单继承 属性复制
var extend = function (target, source) {
  // 遍历源对象中的属性
  for (const property in source) {
    // 将源对象中的属性复制到目标对象中
    target[property] = source[property];
  }
  // 返回目标对象
  return target;
};

var book = {
  name: 'JavaScript 设计模式',
  alike: ['css', 'html', 'JavaScript']
}

var anotherBook = {
  color: 'blue'
};

extend(anotherBook, book);
console.log(anotherBook.name)
console.log(anotherBook.alike)

anotherBook.alike.push('ajax')
anotherBook.name = '设计模式'
console.log(anotherBook.name)
console.log(anotherBook.alike)
console.log(book.name)
console.log(book.alike)