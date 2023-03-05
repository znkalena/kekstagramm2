import { STEP_CHANGE } from './data.js';

const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');
let replaceValue =scaleControlValue.value.replace('%','');

const changeUploadPreview =() => {
  scaleControlSmaller.addEventListener('click',() => {
    replaceValue -= STEP_CHANGE;
    if(replaceValue > 0){
      scaleControlValue.value = replaceValue;
      imgUploadPreview.style.scale = scaleControlValue.value/100;
    }else{
      scaleControlValue.value = 55;
      imgUploadPreview.style.scale = scaleControlValue.value/100;
    }
  });
  scaleControlBigger.addEventListener('click',() => {
    replaceValue += STEP_CHANGE;
    scaleControlValue.value = replaceValue;
    imgUploadPreview.style.scale = scaleControlValue.value/100;
  }) ;
};
changeUploadPreview();
