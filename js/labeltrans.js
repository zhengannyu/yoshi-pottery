//判斷input有無focus，或有無value，有的話+上class
//找出inputs & textarea & labels
const inputs = document.querySelectorAll('.input');
const textarea = document.querySelector('textarea');
const labels = document.querySelectorAll('.input-label');

//把fn包在變數裡(for textarea)
let msgLabelTrans = function () {
  if (textarea.value) {
    labels[3].classList.add('transform_y');
  } else {
    labels[3].classList.remove('transform_y');
  }
};

//inputs的for迴圈
for (let i = 0; i < inputs.length; i++) {
  //把fn包在變數裡(for input)
  let labelTrans = function () {
    if (inputs[i].value) {
      labels[i].classList.add('transform_y');
    } else {
      labels[i].classList.remove('transform_y');
    }
  };
  //讓每個input建立事件監聽並且執行函數labelTrans
  inputs[i].addEventListener('focus', labelTrans);
  inputs[i].addEventListener('blur', labelTrans);
}

//讓textarea建立事件監聽
textarea.addEventListener('focus', msgLabelTrans);
textarea.addEventListener('blur', msgLabelTrans);
