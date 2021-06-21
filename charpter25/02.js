// 数组迭代器
var eachArray = function (arr, fn) {
  var i = 0,
    len = arr.length;
  // 遍历数组
  for (; i < len; i++) {
    // 依次执行回调函数，注意回调函数中传入的参数第一个为索引，第二个为索引对应的值
    if (fn.call(arr[i], i, arr[i]) === false) {
      break;
    }
  }
};

// 对象迭代器
var eachObject = function (obj, fn) {
  // 遍历对象中的每一个属性
  for (var i in obj) {
    if (fn.call(obj[i], i, obj[i]) === false) {
      break;
    }
  }
};

// 创建一个数组
for (var arr = [], i = 0; i < 5; arr[i++] = i);
eachArray(arr, function (i, data) {
  console.log(i, data);
})

var obj = {
  a: 23,
  b: 56,
  c: 67
};
eachObject(obj, function (i, data) {
  console.log(i, data);
})