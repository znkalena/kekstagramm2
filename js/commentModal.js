const textDescription = document.querySelector('.text__description');

textDescription.addEventListener('invalid', () => {
  const value = textDescription.value;
  if(value.validity.tooLong){
    textDescription.setCustomValidity('текст не должен превышать 140-ти символов')
  }else if(value.validity.toShort){
    textDescription.setCustomValidity('текст не должен быть меньше 2-ух символов')
  }else {
    textDescription.setCustomValidity = '';
  }
})
/*textDescription.addEventListener('focus',(event) => {
  event.stopImmediatePropagation();
})*/
