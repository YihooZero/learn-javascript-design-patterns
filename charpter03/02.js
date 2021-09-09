// 工厂模式
function createBook(name, time, type) {
  // 创建一个对象，并对对象拓展属性和方法
  var o = new Object();
  o.name = name;
  o.time = time;
  o.type = type;
  o.getName = function () {
    console.log(this.name)
  }
  return o;
}

var book1 = createBook('js book', 2014, 'js');
var book2 = createBook('css book', 2013, 'css');

book1.getName();
book2.getName();