// 投票结果状态对象
var ResultState = function () {
  // 判断结果保存在内部状态中
  var States = {
    // 每种状态作为一种独立方法保存
    state0: function () {
      // 处理结果0
      console.log('这是第一种情况')
    },
    state1: function () {
      // 处理结果1
      console.log('这是第二种情况')
    },
    state2: function () {
      // 处理结果2
      console.log('这是第三种情况')
    },
    state3: function () {
      // 处理结果3
      console.log('这是第四种情况')
    }
  };
  // 获取某一种状态并执行其对应的方法
  function show(result) {
    States['state' + result] && States['state' + result]();
  }
  return {
    // 返回调用状态方法接口
    show: show
  }
}();

// 展示结果3
ResultState.show(3);