// var input = document.querySelector('input');
// var inputLabel = document.querySelector('input-label');

// input.addEventListener('click', () => {
//   inputLabel.classList.add('labelup');
// });

function pause() {
  inputLabel.classList.remove('labelup');
  // log.textContent = 'FOCUS LOST!';
}

function play() {
  inputLabel.classList.add('labelup');
  // log.textContent = 'This document has focus. Click outside the document to lose focus.';
}

// const log = document.getElementById('log');
var input = document.querySelector('input');
input.addEventListener('blur', pause);
input.addEventListener('focus', play);