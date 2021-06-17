var CanvasCommand = (function () {
  // 获取 canvas
  var canvas = document.getElementById('canvas'),
  // canvas 元素的上下文引用对象缓存在命令对象的内部
  ctx = canvas.getContext('2d');
  // 内部方法
  var Action = {
    // 填充色彩
    fillStyle(c) {
      ctx.fillStyle = c;
    },
    // 填充矩形
    fillRect(x, y, w, h) {
      ctx.fillRect(x, y, w, h);
    },
    // 描边色彩
    strokeStyle(c) {
      ctx.strokeStyle = c;
    },
    // 描边矩形
    strokeRect(x, y, w, h) {
      ctx.strokeRect(x, y, w, h);
    },
    // 填充字体
    fillText(text, x, y) {
      ctx.fillText(text, x, y);
    },
    // 开启路径
    beginPath() {
      ctx.beginPath();
    },
    // 移动画笔触点
    moveTo(x, y) {
      ctx.moveTo(x, y);
    },
    // 画笔连线
    lineTo(x, y) {
      ctx.lineTo(x, y);
    },
    // 绘制弧线
    arc(x, y, radius, startAngle, endAngle, anticlockwise) {
      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    },
    // 填充
    fill() {
      ctx.fill();
    },
    // 描边
    stroke() {
      ctx.stroke();
    }
  };
  return {
    // 命令接口
    excute(msg) {
      // 如果没有指令，则返回
      if (!msg) return;
      // 如果命令是一个数组
      if (msg.length) {
        // 遍历执行多个命令
        for (var i = 0, len = msg.length; i < len; i++) {
          arguments.callee(msg[i]);
        }
        // 执行一个命令
      } else {
        // 如果msg.param 不是一个数组，将其转化为数组，apply第二个参数要求为数组
        msg.param = Object.prototype.toString.call(mag.param) === '[object Array]' ? msg.param : [mag.param];
        // Action内部调用的方法可能引用this， 为保证作用域中this指向正确，故传入Action
        Action[msg.command].apply(Action, msg.param);
      }
    }
  }
})()

// 设置填充色彩为红色，并绘制一个矩形
CanvasCommand([
  {command: 'fillStyle', param: 'red'},
  {command: 'fillRect', param: [20, 20, 100, 100]}
]);