//判斷input有沒有foucus或有value，有的話+上class
const inputA = document.querySelectorAll('.input')[0];
const label = document.querySelectorAll('.input-label')[0];
console.log(inputA)
inputA.addEventListener('onFocus', function () {
  if (inputA.value) {
    label.classList.add('transform_y');
  } else {
    label.classList.remove('transform_y');
  }
});