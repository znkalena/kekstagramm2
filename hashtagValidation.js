const textHashtags =document.querySelector('#hashtags');
const MAX_LENGTH = 20;

textHashtags.addEventListener('invalid', () =>{
  if(textHashtags.validity.valueMissing){
    textHashtags.setCustomValidity('Обязательное поле');
  }
  else{
    textHashtags.setCustomValidity() = '';
  }
});

textHashtags.addEventListener('input',() => {
  let value = textHashtags.value;
  let textInput = value.toLowerCase().trim();
  let inputArray = textInput.split(' ',5);
  console.log(inputArray);
  const isSpaceBetween = inputArray.some(element => element.indexoff('#',1));

  if(inputArray.length === 0){
    return;
  }
  else if(inputArray.length > 5){
    textHashtags.setCustomValidity('не более 5 хэштэгов');
  }
  else if(isSpaceBetween){
    textHashtags.setCustomValidity('между # должен быть пробел');
  }

  inputArray.forEach(element => {
    if(!element.startsWith('#')){
      textHashtags.setCustomValidity('Имя должно начинаться с #');
    }
    if(element.length == 0 || element.length >MAX_LENGTH ){
      textHashtags.setCustomValidity('хэшеэг не может состоять только из одного # или быть больше 20 символов');
    }
    for (let char of element.slice(1)){
      if(char !== '/\A-z/' || char !=='/\D/g/ '){
        textHashtags.setCustomValidity('хэшеэг  может состоять только из букв и цифр');
    }
    }
  });
  });


  /*




  const isLongHashtag = imputArray.some(item => item.length <= MAX_LENGTH );

  if(isLongHashtag){
    textHashtags.setCustomValidity('Длина # не более 20 символов');
  }

  const repeatHashtag = imputArray.filter((elem,index,arr) => arr.indexOff(elem) !== index);
  if(repeatHashtag){
    textHashtags.setCustomValidity('хэштэги не должны повторяться')
  }else{
    textHashtags.setCustomValidity('');
  }
  textHashtags.reportValidity();
});
textHashtags.addEventListener('focus',(event) => {
  event.stopImmediatePropagation();
})*/
