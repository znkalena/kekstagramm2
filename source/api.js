import { createPreviews, listPhotos } from './createpreview.js';
import { showError } from './util.js';
import { listPhotoClickHandler} from './bigPicture.js';
import { getDefaultPhotos, getPhotosWithMuchComments, getRandomPhotos } from './filtres.js';
import { muchCommentsPhotos,defaultPhotos,randomPhotos } from './filtres.js';

const COUNT_PHOTOS=25;
const RERENDER_DELAY =500;
export const filterImg = document.querySelector('.img-filters');



const getFetch = ()  => { fetch('https://23.javascript.pages.academy/kekstagram/data')
  .then((response)=> response.json())
  .then((newPhotos) => {

    createPreviews(newPhotos.slice(0,COUNT_PHOTOS));

    for (let i = 0; i < COUNT_PHOTOS; i++) {
      const thumbnails = listPhotos.querySelectorAll('img');
      listPhotoClickHandler(newPhotos[i],thumbnails[i+1]);
      };

    getPhotosWithMuchComments(_.debounce(() =>createPreviews(muchCommentsPhotos),RERENDER_DELAY),newPhotos);


    getDefaultPhotos(_.debounce(() =>createPreviews(defaultPhotos),RERENDER_DELAY),newPhotos);


    getRandomPhotos(_.debounce(() =>createPreviews(randomPhotos),RERENDER_DELAY),newPhotos);

    filterImg.classList.remove('img-filters--inactive');
  })
  .catch(() => showError('не удалось получить данные,попробуйте еще раз'))
};

getFetch();

const userForm = document.querySelector('.img-upload__form');


const sendFetch =(onSuccess) =>{
  userForm.addEventListener('submit',(evt) =>{
    evt.preventDefault();

    filterImg.classList.add('img-filters--inactive');

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







