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
  /**
   * 添加(修改)数据
   * @param key        数据字段标识
   * @param value      数据值
   * @param callback   回调函数
   * @param time       添加时间
   */
  set(key, value, callback, time) {
    // 默认操作状态时成功
    var status = this.status.SUCCESS,
      // 获取真实字段
      key = this.getKey(key);
    try {
      // 时间参数时获取时间戳
      time = new Date(time).getTime() || time.getTime();
    } catch (e) {
      // 为传入时间参数或者时间参数有误获取默认时间--一个月
      time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31;
    }
    try {
      // 添加数据
      this.storage.setItem(key, time + this.timeSign + value);
    } catch (e) {
      // 溢出失败，返回溢出状态
      status = this.status.OVERFLOW;
    }
    // 有回调函数则执行回调函数并传入参数操作状态，真实数据字段标识以及存储数据值
    callback && callback.call(this, status, key, value);
  },
  /**
   * 获取数据
   * @param key        数据字段标识
   * @param callback   回调函数
   */
  get(key, callback) {
    // 默认操作状态时成功
    var status = this.status.SUCCESS,
      // 获取
      key = this.getKey(key),
      // 默认值为空
      value = null,
      // 时间戳与存储数据之间的拼接符长度
      timeSignLen = this.timeSign.length,
      // 缓存当前对象
      that = this,
      // 时间戳与存储数据之间的拼接符起始位置
      index,
      // 时间戳
      time,
      // 最终获取的数据
      result;
    try {
      // 获取字段对应的数据字符串
      value = that.storage.getItem(key);
    } catch (e) {
      // 获取失败则返回失败状态，数据结果为null
      result = {
        status: that.status.FAILURE,
        value: null
      };
      // 执行回调并返回
      callback && callback.call(this, result.status, result.value);
      return result;
    }
    // 如果成功获取数据字符串
    if (value) {
      // 获取时间戳与存储数据之间的拼接符起始位置
      index = value.indexOf(that.timeSign);
      // 获取时间戳
      time = +value.slice(0, index);
      // 如果时间为过期
      if (new Date(time).getTime() > new Date().getTime() || time == 0) {
        // 获取数据结果
        value = value.slice(index + timeSignLen);
      } else {
        // 过期结果为null
        value = null;
        // 设置状态为过期状态
        status = that.status.TIMEOUT;
        // 删除该字段
        that.remove(key);
      }
    } else {
      // 未获取数据字符串状态为失败状态
      status = that.status.FAILURE;
    }
    // 设置结果
    result = {
      status: status,
      value: value
    };
    // 执行回调函数
    callback && callback(this, result.status, result.value);
    return result;
  },
  /**
   * 删除数据
   * @param key       数据字段标识
   * @param callback  回调函数
   */
  remove(key, callback) {
    // 设置默认操作状态为失败
    var status = this.status.FAILURE,
      // 获取实际数据字段名称
      key = this.getKey(key),
      // 设置默认数据结果为空
      value = null;
    try {
      // 获取字段对应的数据
      value = this.storage.getItem(key);
    } catch (e) {}
    // 如果数据存在
    if (value) {
      try {
        // 删除数据
        this.storage.removeItem(key);
        // 设置操作成功
        status = this.status.SUCCESS;
      } catch (e) {}
    }
    callback && callback.call(this, status, status > 0 ? null : value.slice(value.indexOf(this.timeSign) + this.timeSign.length))
  }
}

var LS = new BaseLocalStorage('LS__');

LS.set('a', 'xiao ming', function () {
  console.log(arguments);                                             // [0, 'LS__a', 'xiao ming']
})

LS.get('a', function () {
  console.log(arguments);                                             // [0, 'xiao ming']
})

LS.remove('a', function () {
  console.log(arguments);                                             // [0, 'xiao ming']
})

LS.remove('a', function () {
  console.log(arguments);                                             // [1, null]
})

LS.get('a', function () {
  console.log(arguments);                                             // [1, null]
})
