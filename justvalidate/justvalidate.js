const validator = new window.JustValidate('#upload-select-image',{
  errorLabelCssClass:'modal__input-error',
  errorLabelStyle: {
    color: '#ffC700',
  },
});

validator.addField('#hashtags',[
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'hashtag should be more than 3 letters.',
  },
  {
    rule: 'maxLength',
    value: 20,
    errorMessage: 'hashtag should be less than 20 letters.',
  },
  {
    rule: 'customRegexp',
    value:/^#[A-Za-z0-9/s-]+/,
    errorMessage: 'Message should be letters and numbers.',
  },
])
validator.addField('#description', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Message should be more than 3 letters.',
  },
  {
    rule: 'maxLength',
    value: 140,
    errorMessage: 'Message should be less than 140 letters.',
  },
])
