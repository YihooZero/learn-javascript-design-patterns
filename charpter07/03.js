function prototypeExtend() {
  var F = function() {},
    args = arguments,
    i = 0,
    len = args.length;
  for (; i < len; i++) {
    // 遍历每个模板对象中的属性
    for (var j in args[i]) {
      F.prototype[j] = args[i][j];
    }
  }
  // 返回缓存类的一个实例
  return new F();
}

var penguin = prototypeExtend({
  speed: 20,
  swim: function () {
    console.log('游泳速度 ' + this.speed);
  }
}, {
  run: function (speed) {
    console.log('奔跑速度 ' + speed);
  }
}, {
  jump: function () {
    console.log('跳跃动作')
  }
});

penguin.swim();    // 游泳速度 20
penguin.run(10);  // 奔跑速度 10
penguin.jump();    // 跳跃动作