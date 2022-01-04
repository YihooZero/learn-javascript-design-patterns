// 多态
function add() {
  // 获取参数
  var arg = arguments,
    // 获取参数长度
    len = arg.length;
  switch (len) {
    // 如果没有参数
    case 0:
      return 10;
    // 如果只有一个参数
    case 1:
      return  10 + arg[0];
    // 如果有两个参数
    case 2:
      return  arg[0] + arg[1];
  }
}

// 测试用例
console.log(add())     // 10
console.log(add(5))    // 15
console.log(add(6,7))  // 13