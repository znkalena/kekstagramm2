import { STEP_CHANGE } from './data.js';

const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');

let replaceValue =scaleControlValue.value.replace('%','');

const increaseSize = scaleControlBigger.addEventListener('click',() => {
  if(replaceValue <STEP_CHANGE*3){
    replaceValue += STEP_CHANGE;
    scaleControlValue.value = replaceValue + '%';
    imgUploadPreview.style.scale = scaleControlValue.value;
  }else{
    scaleControlValue.value = STEP_CHANGE*4 +'%';
    imgUploadPreview.style.scale = scaleControlValue.value;
  }
});

const reduceSize = scaleControlSmaller.addEventListener('click',() => {
  if(replaceValue > STEP_CHANGE){
    replaceValue -= STEP_CHANGE;
    scaleControlValue.value = replaceValue + '%';
    imgUploadPreview.style.scale = scaleControlValue.value;
  }else{
    scaleControlValue.value = STEP_CHANGE +'%';
    imgUploadPreview.style.scale = scaleControlValue.value;
  }
});

export{increaseSize,reduceSize} ;
