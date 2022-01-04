// 命名空间 单体对象
var A = A || {};
// 主体展示区容器
A.root = document.getElementById('container');
// 创建视图方法集合
A.strategy = {
  // 文字列表展示
  listPart(data){
    var s = document.createElement('div'),
      h = document.createElement('h2'),
      p = document.createElement('p'),
      ht = document.createTextNode(data.data.h2),
      pt = document.createTextNode(data.data.p),
      ul = document.createElement('ul'),
      ldata = data.data.li,
      li, strong, span, t, c;
    // 有id设置模块id
    data.id && (s.id = data.id);
    s.className = 'part';
    h.appendChild(ht);
    p.appendChild(pt);
    s.appendChild(h);
    s.appendChild(p);
    // 遍历列表数据
    for (var i = 0, len = ldata.length; i < len; i++) {
      li = document.createElement('li');
      strong = document.createElement('strong');
      span = document.createElement('span');
      t = document.createTextNode(ldata[i].strong);
      c = document.createTextNode(ldata[i].span);
      strong.appendChild(t);
      span.appendChild(c);
      li.appendChild(strong);
      li.appendChild(span);
      ul.appendChild(li);
    }
    s.appendChild(ul);
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