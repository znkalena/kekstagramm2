const textHashtags =document.querySelector('.text__hashtags');

textHashtags.addEventListener('invalid', () =>{
  if(textHashtags.validity.tooShort){
    textHashtags.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  }else if(textHashtags.validity.tooLong){
    textHashtags.setCustomValidity('Имя не должно превышать 20-ти символов')
  }else{
    textHashtags.setCustomValidity = '';
  }
});

textHashtags.addEventListener('input',() => {
  let valueLength = textHashtags.value.length;
  let value = textHashtags.value;
  if( valueLength === 1 && value !== '#'){
    textHashtags.setCustomValidity('Имя должно начинаться с #')
  }else if(value !== String || value !== Number){
    textHashtags.setCustomValidity('Только цифры и буквы!')
  }else{
    textHashtags.setCustomValidity('');
  }
  textHashtags.reportValidity();
})
