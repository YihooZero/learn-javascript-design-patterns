function inheritObject(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function createBook(obj) {
  // 通过原型继承方式创建新对象
  var o = inheritObject(obj);
  // 拓展新对象
  o.getName = function () {
    console.log(name);
  };
  // 返回拓展后的新对象
  return o;
}

var book = {
  name: 'js book',
  alikeBook: ['css book', 'html book']
};

var newBook = createBook(book);
newBook.name = 'ajax book';
newBook.alikeBook.push('xml book');

var otherBook = createBook(book);
otherBook.name = 'flash book';
otherBook.alikeBook.push('as book');

console.log(newBook);
console.log(otherBook);
console.log(book);