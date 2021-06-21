var ul = document.getElementById('container');

ul.onclick = function (e) {
  e = e || window.event;
  var tar = e.target || e.srcElement;
  if (tar.nodeName.toLowerCase() === 'li') {
    tar.style.backgroundColor = 'grey';
  }
}

/**
 * <div id="article">
 *   <p>第一段文字</p>
 * </div>
 */
 var article = document.getElementById('article');
 article.onclick = function (e) {
   e = e || window.e;
   var tar = e.target || e.srcElement;
   if (tar.nodeName.toLowerCase() == 'p') {
     tar.innerHTML = '我要改变这段内容';
   }
 };

 var p = document.createElement('p');
 p.innerHTML = '新增一段内容';
 article.appendChild(p);
