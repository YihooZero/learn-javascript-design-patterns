// 外观模式实现
function addEvent(dom, type, fn) {
  // 对于支持DOM2级事件处理程序 addEventListener 方法的浏览器
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn);
  } else {
    dom['on' + type] = fn;
  }
}

var myInput = document.getElementById('myinput');
addEvent(myInput, 'click', function () {
  console.log('绑定第一个事件');
})

addEvent(myInput, 'click', function () {
  console.log('绑定第二个事件')
})

addEvent(myInput, 'click', function () {
  console.log('绑定第三个事件')
})