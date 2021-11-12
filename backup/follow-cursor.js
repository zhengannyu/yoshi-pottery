//滑鼠游標
var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var xmouse, ymouse;
$on('mousemove', function (e) {
  xmouse = e.clientX || e.pageX;
  ymouse = e.clientY || e.pageY;
});

var ball = $('#ball');
var x = void 0,
  y = void 0,
  dx = void 0,
  dy = void 0,
  tx = 0,
  ty = 0,
  key = -1;

var followMouse = function followMouse() {
  key = requestAnimationFrame(followMouse);

  if (!x || !y) {
    x = xmouse;
    y = ymouse;
    // speed = 0.08;
  } else {
    dx = (xmouse - x);
    dy = (ymouse - y);
    if (Math.abs(dx) + Math.abs(dy) < 0.1) {
      x = xmouse;
      y = ymouse;
    } else {
      x += dx;
      y += dy;
    }
  }
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
};
//讓mouseCursor = .cursor
let mouseCursor = document.querySelector('#ball');
//獲取所有navlinks
let links = document.querySelectorAll('a, button, input, textarea, select');
// console.log(links);

links.forEach(link => {
  //當滑鼠HOVER時
  link.addEventListener('mouseover', () => {
    //在.cursor增加一個classname'link-grow'
    mouseCursor.classList.add('link-grow');
    //在link增加一個classname'hovered-link'
    // link.classList.add('hovered-link');
  });
  //當滑鼠leave時
  link.addEventListener('mouseleave', () => {
    //刪除classname'link-grow'
    mouseCursor.classList.remove('link-grow')
    // link.classList.remove('hovered-link');
  });
});