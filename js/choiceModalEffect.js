import {createSlider } from './modalSlider.js';

const effectSlider = document.querySelector('.effect-level__slider');
const fieldsetEffects =document.querySelector('.img-upload__effects');
const radioImputs = fieldsetEffects.querySelectorAll('.effects__radio');
const imgUploadPpreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectLevel =document.querySelector('.effect-level__value');
let effectValue = effectLevel.value;

createSlider();

fieldsetEffects.addEventListener('change',() =>{
  imgUploadPpreview.className = '';
  radioImputs.forEach(radioImput =>{
    if(radioImput.checked){
      const effect = radioImput.value;
      imgUploadPpreview.classList.add(`effects__preview--${effect}`);

      if(radioImput.value === 'chrome'){
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start:0.5,
          step: 0.1,
        });
        effectSlider.noUiSlider.on('update',(values,handle) =>{
          effectValue = values[handle];
          imgUploadPpreview.style.filter =`grayscale(${effectValue})`;
        });
      }else if(radioImput.value === 'sepia'){
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start:0.5,
          step: 0.1,
        });
        effectSlider.noUiSlider.on('update',(values,handle) =>{
          effectValue = values[handle];
          imgUploadPpreview.style.filter =`sepia(${effectValue})`;
        });
      }else if(radioImput.value === 'marvin'){
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 100,
          },
          start:50,
          step: 1,
        });
        effectSlider.noUiSlider.on('update',(values,handle) =>{
          effectValue =Math.round(values[handle]);
          imgUploadPpreview.style.filter =`invert(${effectValue}%)`;
        });
      }else if(radioImput.value === 'phobos'){
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start:1.5,
          step: 0.1,
        });
        effectSlider.noUiSlider.on('update',(values,handle) =>{
          effectValue = values[handle];
          imgUploadPpreview.style.filter =`blur(${effectValue}px)`;
        });
      }else if(radioImput.value === 'heat'){
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start:1.5,
          step: 0.1,
        });
        effectSlider.noUiSlider.on('update',(values,handle) =>{
          effectValue = values[handle];
          imgUploadPpreview.style.filter =`brightness(${effectValue})`;
        });
      }else if(radioImput.value === 'none'){
        imgUploadPpreview.style.filter ='';
        effectSlider.noUiSlider.destroy();
      }
    }/*else{
      imgUploadPpreview.style.filter ='';
      effectSlider.noUiSlider.destroy();
    }*/
  });});
