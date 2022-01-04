// 多维变量类
function Speed(x, y) {
  this.x = x;
  this.y = y;
}
Speed.prototype.run = function () {
  console.log('运动起来');
}

// 着色单元
function Color(cl) {
  this.color = cl;
}
Color.prototype.draw = function () {
  console.log('绘制色彩');
}

// 变形单元
function Shape(sp) {
  this.shape = sp;
}
Shape.prototype.change = function () {
  console.log('改变形状');
}

// 说话单元
function Speek(wd) {
  this.word = wd;
}
Speek.prototype.say = function () {
  console.log('书写字体');
}

// 创建一个球类，可以运动，可以着色
function Ball(x, y, c) {
  // 实现运动单元
  this.speed = new Speed(x, y);
  // 实现着色单元
  this.color = new Color(c);
}
Ball.prototype.init = function () {
  // 实现运动
  this.speed.run();
  // 实现着色
  this.color.draw();
}
// 创建一个人物类，可以运动和说话
function People(x, y, f) {
  this.speed = new Speed(x, y);
  this.font = new Speed(f);
}
People.prototype.init = function () {
  this.speed.run();
  this.font.say();
}
// 创建精灵类，可以运动，可以着色，可以改变形状
function Spirite(x, y, c, s) {
  this.speed = new Speed(x, y);
  this.color = new Color(c);
  this.shape = new Shape(s);
}
Spirite.prototype.init = function () {
  this.speed.run();
  this.color.draw();
  this.shape.change();
}

var p = new People(10, 12, 16);
p.init();
