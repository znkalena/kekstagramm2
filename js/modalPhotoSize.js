import { STEP_CHANGE } from './data.js';
import { imgPreview } from './imgload.js';

const UploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = UploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = UploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = UploadScale.querySelector('.scale__control--value');
const SCALE_MAX =100;
const SCALE_MIN =0.25;

let replaceValue =Number(scaleControlValue.value.replace('%',''));


scaleControlBigger.addEventListener('click',() => {
  if(replaceValue <STEP_CHANGE * 3){
    replaceValue += STEP_CHANGE;
    scaleControlValue.value = replaceValue + '%';
    imgPreview.style.scale = replaceValue/SCALE_MAX;
  }else{
    replaceValue = SCALE_MAX;
    scaleControlValue.value = SCALE_MAX +'%';
    imgPreview.style.scale = 1;
  }
  return replaceValue;
});

scaleControlSmaller.addEventListener('click',() => {
  if(replaceValue > STEP_CHANGE){
    replaceValue -= STEP_CHANGE;
    scaleControlValue.value = replaceValue + '%';
    imgPreview.style.scale = replaceValue/SCALE_MAX;
  }else{
    scaleControlValue.value = STEP_CHANGE +'%';
    imgPreview.style.scale = SCALE_MIN;
  }
  return replaceValue;
});

