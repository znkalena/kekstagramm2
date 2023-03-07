const textHashtags =document.querySelector('.text__hashtags');
const MAX_LENGTH = 20;

textHashtags.addEventListener('invalid', () =>{
  if(textHashtags.validity.tooShort){
    textHashtags.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  }
  else{
    textHashtags.setCustomValidity = '';
  }
});

textHashtags.addEventListener('input',() => {
  let value = textHashtags.value;
  let textInput = value.toLowerCase().trim('');
  let imputArray = textInput.split(/\s+/);

  if(imputArray.length === 0){
    return
  }
  if (imputArray.length > 5){
    textHashtags.setCustomValidity('не более 5 хэштэгов')
  }
  if(imputArray[0] !== '#'){
    textHashtags.setCustomValidity('Имя должно начинаться с #')
  }

  const isSpaceBetween = imputArray.some(item => item.indexOff('#',1));

  if(isSpaceBetween){
    textHashtags.setCustomValidity('между # должен быть пробел')
  }

  const isLongHashtag = imputArray.some(item => item.length <= MAX_LENGTH );

  if(isLongHashtag){
    textHashtags.setCustomValidity('Длина # не более 20 символов')
  }

  const repeatHashtag = imputArray.filter((elem,index,arr) => arr.indexOff(elem) !== index);
  if(repeatHashtag){
    textHashtags.setCustomValidity('хэштэги не должны повторяться')
  }else{
    textHashtags.setCustomValidity('');
  }
  textHashtags.reportValidity();
});
textHashtags.addEventListener('click',(event) => {
  event.stopImmediatePropagation();
})
