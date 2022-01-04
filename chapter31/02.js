// 命名空间 单体对象
var A = A || {};
// 主体展示区容器
A.root = document.getElementById('container');
// 创建视图方法集合
A.strategy = {
  // 文字列表展示
  listPart(data){
    var s = document.createElement('div'),
      ul = '',
      ldata = data.data.li,
      // 模块模板
      tpl = [
        '<h2>{#h2#}</h2>',
        '<p>{#p#}</p>',
        '<ul>{#ul#}</ul>',
      ].join(''),
      // 列表模板
      liTpl = [
        '<li>',
          '<strong>{#strong#}</strong>',
          '<span>{#span#}</span>',
        '</li>'
      ].join('');
    // 有id设置模块id
    data.id && (s.id = data.id);
    // 遍历列表数据
    for (var i = 0, len = ldata.length; i < len; i++) {
      // 如果有列表项数据
      if (ldata[i].em || ldata[i].span) {
        // 列表字符串追加一项列表项
        ul += A.formateString(liTpl, ldata[i]);
      }
    }
    // 装饰列表数据
    data.data.ul = ul;
    // 渲染模块并插入模块中
    s.innerHTML = A.formateString(tpl, data.data);
    // 渲染模块
    A.root.appendChild(s);
  },
  codePart(){},
  onlyTitle(){},
  guide(){},
}
// 创建视图入口
A.init = function (data) {
  // 根据传输的视图类型创建视图
  this.strategy[data.type](data);
}

A.formateString = function (str, data) {
  return str.replace(/\{#(\w+)#\}/g, function (match, key) {
    return typeof data[key] === "undefined" ? '' : data[key];
  })
}
