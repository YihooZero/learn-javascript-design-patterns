// 安全模式创建的工厂类
var Factory = function (type, content) {
  if (this instanceof Factory) {
    var s = new this[type](content);
    return s;
  } else {
    return new Factory(type, content);
  }
};

// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
  Java: function (content) {
    // ...
  },
  JavaScript: function (content) {
    // ...
  },
  UI: function (content) {
    this.content = content;
    (function (content) {
      var div = document.createElement('div');
      div.innerHTML = content;
      div.style.border = '1px solid red';
      document.getElementById('container').appendChild(div);
    })(content);
  },
  php: function (content) {
    // ...
  }
};

var data = [
  { type: 'JavaScript', content: 'JavaScript 哪家强' },
  { type: 'UI', content: 'UI 哪家强' },
  { type: 'Java', content: 'Java 哪家强' },
  { type: 'php', content: 'php 哪家强' }
];

for (var i = data.length - 1; i >= 0; i--) {
  new Factory(data[i].type, data[i].content);
}