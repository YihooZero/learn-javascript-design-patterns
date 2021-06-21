/**
 * 本地存储类
 * 参数 preId         本地存储数据库前缀
 * 参数 timeSign      时间戳与存储数据之间的拼接符
 */
function BaseLocalStorage(preId, timeSign) {
  // 定义本地存储数据库前缀
  this.preId = preId;
  // 定义时间戳与存储数据之间的拼接符
  this.timeSign = timeSign || '|-|';
}
// 本地存储类原型方法
BaseLocalStorage.prototype = {
  // 操作状态
  status: {
    SUCCESS:  0,     // 成功
    FAILURE:  1,     // 失败
    OVERFLOW: 2,     // 溢出
    TIMEOUT:  3      // 过期
  },
  // 保存本地存储链接
  storage: localStorage || window.localStorage,
  // 获取本地存储数据真实字段
  getKey(key) {
    return this.preId + key;
  },
  // 添加(修改)数据
  set(key, value, callback, time) {
    // 省略操作
  },
  // 获取数据
  get(key, callback) {
    // 省略操作
  },
  // 删除数据
  remove(key, callback) {
    // 省略操作
  }
}
