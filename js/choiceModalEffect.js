const fieldsetEffects =document.querySelector('.img-upload__effects');
const radioImputs = fieldsetEffects.querySelectorAll('.effects__radio');
const imgUploadPpreview = document.querySelector('.img-upload__preview').querySelector('img');


const choiceEffect = fieldsetEffects.addEventListener('change',() =>{
  imgUploadPpreview.className = '';
  radioImputs.forEach(radioImput =>{
    if(radioImput.checked){
      const effect = radioImput.value;
      imgUploadPpreview.classList.add(`effects__preview--${effect}`)
    }
  },
  )
});

export {choiceEffect}
