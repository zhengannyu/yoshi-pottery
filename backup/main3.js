const input = document.querySelector('input');

//看有哪些屬性可以用
console.dir(input)
input.addEventListener('focus', function (e) {
  const label = document.querySelector('label');
  //e instanceof FocusEvent = isFocus
  const isFocus = e instanceof FocusEvent;
  //console.log(e instanceof FocusEvent)

  //if input有focus或input有東西的時候{執行這裡的程式 add class}
  //else 拿掉class
  if (isFocus || input.value) {
    label.classList.add('transform_y')
  } else {
    label.classList.remove('transform_y')
  }
})

input.addEventListener('blur', function (e) {
  const label = document.querySelector('label');
  const isFocus = e instanceof FocusEvent;
  if (isFocus || input.value) {
    label.classList.add('transform_y')
  } else {
    label.classList.remove('transform_y')
  }
})