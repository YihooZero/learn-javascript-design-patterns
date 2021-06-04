function inheritObject(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

var book = {
  name: 'js book',
  alikeBook: ['css book', 'html book']
};

var newBook = inheritObject(book);
newBook.name = 'ajax book';
newBook.alikeBook.push('xml book');

var otherBook = inheritObject(book);
otherBook.name = 'flash book';
otherBook.alikeBook.push('as book');

console.log(newBook);
console.log(otherBook);
console.log(book);

console.log(newBook.name);
console.log(newBook.alikeBook);

console.log(otherBook.name);
console.log(otherBook.alikeBook);

console.log(book.name);
console.log(book.alikeBook);