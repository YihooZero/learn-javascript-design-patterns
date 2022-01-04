// 抽象
function changeColor(dom, color, bg) {
  // 设置元素的字体颜色
  dom.style.color = color;
  // 设置元素的背景颜色
  dom.style.background = bg;
}

var spans = document.getElementsByTagName('span');
spans[0].onmouseover = function () {
  changeColor(this, 'red', '#ddd')
}
spans[0].onmouseout = function () {
  changeColor(this, '#333', '#f5f5f5')
}