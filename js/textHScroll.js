let lineRL = document.querySelector('.display-title');

//當scroll
window.onscroll = () => {
  // let pos = window.scrollY - 900;
  let pos = window.scrollY - 900;
  console.log(pos)
  lineRL.style.right = `${pos}px`;
};