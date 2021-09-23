// 数组迭代器
var eachArray = function (arr, fn) {
  for (var i = 0, len = arr.length; i < len; i++) {
    fn(arr[i], i, arr)
  }
};

eachArray([1,2,3,4], function(item, i, arr) {
  console.log(item, i, arr);
});

// 对象迭代器
var eachObject = function (obj, fn) {
  // 遍历对象中的每一个属性
  for (var i in obj) {
    fn(obj[i], i, obj)
  }
};

eachObject({a: '123', b: '456', c: '789'}, function(item, key, obj) {
  console.log(item, key, obj);
});