//line1 = 字串.line-1
let line1 = document.querySelector('.display-title');
let line2 = document.querySelector('.display-title');

//當scroll
window.onscroll = () => {
  let pos = window.scrollY - 800;
  //console.log(pos)

  line1.style.left = `${pos}px`
  line2.style.right = `${pos}px`
}