import {createSlider } from './modalSlider.js';

const effectSlider = document.querySelector('.effect-level__slider');
const fieldsetEffects =document.querySelector('.img-upload__effects');
const radioImputs = fieldsetEffects.querySelectorAll('.effects__radio');
const imgUploadPpreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectLevel =document.querySelector('.effect-level__value');

createSlider();

const sliderValue = effectSlider.noUiSlider.on('update',(values,handle) =>values[handle]);

fieldsetEffects.addEventListener('change',() =>{
  imgUploadPpreview.className = '';
  radioImputs.forEach(radioImput =>{
    if(radioImput.checked){
      const effect = radioImput.value;
      imgUploadPpreview.classList.add(`effects__preview--${effect}`);

      effectLevel.value = sliderValue;

      if(radioImput.value === 'chrome'){
        imgUploadPpreview.style.filter ='grayscale(0..1)';

        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start:0.5,
          step: 0.1,
        });
      }else if(radioImput.value === 'sepia'){
        imgUploadPpreview.style.filter ='sepia(0..1)';
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start:0.5,
          step: 0.1,
        });
      }else if(radioImput.value === 'marvin'){
        imgUploadPpreview.style.filter ='invert(0..100%)';
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 100,
          },
          start:50,
          step: 1,
        });
      }else if(radioImput.value === 'phobos'){
        imgUploadPpreview.style.filter ='blur(0..3px)';
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start:1.5,
          step: 0.1,
        });
      }else if(radioImput.value === 'heat'){
        imgUploadPpreview.style.filter ='brightness(1..3)';
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start:1.5,
          step: 0.1,
        });
      }else{
        imgUploadPpreview.style.filter ='';
      /*  effectSlider.noUiSlider.destroy();*/
      }
    }
  },
  )
});


