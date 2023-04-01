import { createPreviews } from './createpreview.js';
import { showError } from './util.js';

const COUNT_PHOTOS=25;

const getFetch = ()  => { fetch('https://23.javascript.pages.academy/kekstagram/data')
  .then((response)=> response.json())
  .then((newPhotos) => {
    createPreviews(newPhotos.slice(0,COUNT_PHOTOS));
  })
  .catch(() => showError('не удалось получить данные,попробуйте еще раз'))
};
getFetch();

const userForm = document.querySelector('.img-upload__form');


const sendFetch =(onSuccess) =>{
  userForm.addEventListener('submit',(evt) =>{
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch('https://23.javascript.pages.academy/kekstagram ',
      {
        method:'POST',
        body:formData,
      })
      .then((response) =>{
        if(response.ok){
          onSuccess();
        }else{
          showError('не удалось отправить форму,попробуйте еще раз')
        }
      })
      .catch(() => showError('не удалось отправить форму,попробуйте еще раз'))
  });
};


export {getFetch,sendFetch};







