// 迭代器
var Iterator = function (items, container) {
  // 获取父容器，若container参数存在，并且可以获取该元素则获取，否则获取document
  var container = container && document.getElementById(container) || document,
    // 获取元素
    items = container.getElementsByTagName(items),
    // 获取元素长度
    length = items.length,
    // 当前索引值，默认0
    index = 0;
  // 缓存源生数组splice方法
  var splice = [].splice();
  return {
    // 获取第一个元素
    first(){
      index = 0;
      return items[index];
    },
    // 获取最后一个元素
    second(){
      index = length - 1;
      return items[index];
    },
    // 获取前一个元素
    pre(){
      if (--index > 0) {
        return items[index];
      } else {
        index = 0;
        return null;
      }
    },
    // 获取后一个元素
    next(){
      if (++index < length) {
        return items[index];
      } else {
        index = length - 1;
        return null;
      }
    },
    // 获取某一个元素
    get(num){
      // 如果num大于等于0正向获取，否则逆向获取
      index = num >= 0 ? num % length : num % length + length;
      return items[index];
    },
    // 对每一个元素执行某个方法
    dealEach(fn){
      // 第二个参数开始为回调函数中参数
      var args = splice.call(arguments, 1);
      // 遍历元素
      for (var i = 0; i < length; i++) {
        // 对元素执行回调函数
        fn.apply(items[i], args);
      }
    },
    // 对某一个元素执行某个方法
    dealItem(num, fn){
      // 对元素执行回调函数
      // 1、第三个参数开始为回调函数中参数
      // 2、通过this.get方法设置index索引值
      fn.apply(this.get(num), splice.call(arguments, 2));
    },
    // 排他方式处理某个元素
    exclusive(num, allFn, numFn){
      // 对所有元素执行回调函数
      this.dealEach(allFn);
      // 如果num类型为数组
      if (Object.prototype.toString.call(num) === '[object Array]') {
        // 遍历num数组
        for (var i = 0, len = num.length; i < len; i++) {
          // 分别处理数组中每一个元素
          this.dealItem(num[i], numFn);
        }
      } else {
        // 处理第num个元素
        this.dealItem(num, numFn);
      }
    }
  }
};

var demo = new Iterator('li', 'container');

console.log(demo.first());
console.log(demo.pre());
console.log(demo.next());
console.log(demo.get(2000));
// 处理所有元素
demo.dealEach(function (text, color) {
  this.innerHTML = text;
  this.style.background = color;
}, 'test', 'pink');
// 排它思想处理第3个与第四个元素
demo.exclusive([2, 3], function () {
  this.innerHTML = '被排除的';
  this.style.background = 'green';
}, function () {
  this.innerHTML = '选中的';
  this.style.background = 'red';
})