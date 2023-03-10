
const effectSlider = document.querySelector('.effect-level__slider');
const effectImput = document.querySelector('.effect-level__value');

noUiSlider.create(effectSlider, {
  start:  80,
  step: 1,
  connect: true,
  range: {
    'min': 0,
    'max': 100,
  },
});

effectSlider.noUiSlider.on('update',(values,handle) => {
  effectImput.value = values[handle];
})
