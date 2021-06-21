// 同步变量
var A = {
  // 所有用户共有
  common: {},
  // 客户端数据
  client: {
    user: {
      username: '雨夜清明',
      uid: '123'
    }
  },
  // 服务器端数据
  server: {}
};

// 同步变量迭代取值器
var AGetter = function (key) {
  // 如果不存在A则返回未定义
  if (!A) return undefined;
  var result = A;
  key = key.split('.');
  // 迭代同步变量A对象属性
  for (var i = 0, len = key.length; i < len; i++) {
    // 如果第i层属性存在对应的值则迭代该属性值
    if (result[key[i]] !== undefined) {
      result = result[key[i]];
      // 如果不存在则返回未定义
    } else {
      return  undefined;
    }
  }
  return result;
};
// 获取用户名姓名
console.log(AGetter('client.user.username'));
// 获取本地语言数据
console.log(AGetter('server.lang.local'));

// 同步变量迭代赋值器
var ASetter = function (key, val) {
  if (!A) return undefined;
  var result = A;
  key = result.split('.');
  // 迭代同步变量A对象属性
  for (var i = 0, len = key.length; i < len - 1; i++) {
    if (result[key[i]] === undefined) {
      result[key[i]] = {};
    }
    // 如果第i层属性对应的值不是对象（Object）的一个实例，则抛出错误
    if (!result[key[i]] instanceof Object) {
      throw new Error('A.' + key.splice(0, i + 1).join('.') + ' is not Object');
    }
    // 迭代该层属性值
    result = result[key[i]];
  }
  // 返回设置成功的属性值
  return result[key[i]] = val;
};
// 缓存添加体育模块数据
console.log(ASetter('client.module.news.sports', 'on'));
// 为值类型数据添加属性是不允许的
console.log(ASetter('client.user.username.sports', 'on'));
// Uncaught Error: A.client.user.username is not Object