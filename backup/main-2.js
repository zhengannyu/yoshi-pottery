const inputs = document.querySelectorAll('input');
inputs.forEach((input, index) => {
  const handleinput = (e) => {
    const labels = document.querySelectorAll('label');
    const isFocus = e instanceof FocusEvent.type == 'focus' ? ture : false;
    if (isFocus || inputs[index].value) {
      labels[index].classList.add('transform_y')
    } else {
      labels[index].classList.remove('transform_y')
    }
  };
  //最後要的這個行為 
  const transformy = (fn) => {
    //...args剩餘運算子
    return (...args) => {
      fn.apply(null, args)
    }
  }
  input.addEventListener('focus', transformy(handleinput))
  input.addEventListener('blur', transformy(handleinput))
})

// const inputs = document.querySelectorAll('input');
// inputs.forEach((input, index) => {
//   const handleinput = (e) => {
//     const labels = document.querySelectorAll('label');

//     //ternary operator
//     const isFocus = e instanceof FocusEvent.type == 'focus' ? ture : false;

//     //if..else
//     // let isFocus;
//     // if (FocusEvent.type == 'focus') {
//     //   isFocus = true
//     // } else {
//     //   isFocus = false
//     // }

//     if (isFocus || inputs[index].value) {
//       labels[index].classList.add('transform_y')
//     } else {
//       labels[index].classList.remove('transform_y')
//     }
//   };
//   //最後要的這個行為 
//   const transformy = (fn) => {
//     //...args剩餘運算子
//     return (...args) => {
//       fn.apply(null, args)
//     }
//   }

//   input.addEventListener('focus', transformy(handleinput))
//   input.addEventListener('blur', transformy(handleinput))
// })