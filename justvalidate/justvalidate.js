

const validator = new window.JustValidate('#upload-select-image');

validator.addField('#hashtags',[
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Message should be more than 3 letters.',
  },
  {
    rule: 'maxLength',
    value: 20,
    errorMessage: 'Message should be less than 20 letters.',
  },
  {
    rule: 'customRegexp',
    value: /[a-z]/gi,
  },
])
validator.addField('#description', [
  {
    validator: (value) => {
      return value !== undefined && value.length > 3;
    },
    errorMessage: 'Message should be more than 3 letters.',
  },
  {
    rule: 'maxLength',
    value: 140,
    errorMessage: 'Message should be less than 140 letters.',
  },
])
