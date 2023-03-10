const effectSlider = document.querySelector('.effect-level__slider');

const createSlider =() =>{
  noUiSlider.create(effectSlider, {
    start:  80,
    step: 1,
    connect: true,
    range: {
      'min': 0,
      'max': 100,
    },
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    }});
};
export {createSlider}
