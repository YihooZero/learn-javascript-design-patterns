// 显示某页的逻辑
function showPage(page, data) {
  // ...
}

// Page 备忘录类
var Page = function (page, fn) {
  // 信息缓存对象
  var cache = {};
  /**
   * 主函数
   * 参数 page 页码
   * 参数 fn   成功回调函数
   */
  return function () {
    // 判断该页数据是否在缓存中
    if (cache[page]) {
      // 恢复到该页状态，显示该页内容
      showPage(page, cache[page]);
      // 执行成功回调函数
      fn && fn();
    } else {
      // 若缓存Cache中无该页数据
      $.post('./xxx.php', {
        // 请求携带的page页码
        page
      }, function (res) {
        // 成功返回
        if (res.errNo == 0) {
          // 显示该页数据
          showPage(page, res.data);
          // 将该页数据种入缓存中
          cache[page] = res.data;
          // 执行成功回调函数
          fn && fn();
        } else {
          // 处理异常
        }
      })
    }
  }
}();

// 下一页按钮点击事件
$('#next_page').click(function () {
  // 获取新闻内容元素
  var $news = $('#news_content'),
    // 获取新闻内容元素当前页数据
    page = $news.data('page');
  // 获取并显示新闻
  Page(page, function () {
    // 修正新闻内容元素当前页数据
    $news.data('page', page + 1);
  })
})