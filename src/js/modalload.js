import { sendFetch } from './api.js';
import { isEventEsc} from './util.js';
import { filterImg}  from './api.js';

const uploadFile =document.querySelector('#upload-file');
const uploadCancel =document.querySelector('#upload-cancel');
const body = document.querySelector('body');
const formaUploadImage = document.querySelector('.img-upload__overlay');

const closeUploadFile =() => {
  body.classList.remove('modal-open');
  formaUploadImage.classList.add('hidden');
  uploadFile.textContent ='';
  filterImg.classList.remove('img-filters--inactive');
};

const openUploadFile = () => {
  body.classList.add('modal-open');
  formaUploadImage.classList.remove('hidden');
  filterImg.classList.add('img-filters--inactive');

  document.addEventListener('keydown',(evt) =>{
    if(isEventEsc(evt)){
      evt.preventDefault();
      closeUploadFile();
    }
  });
  uploadCancel.addEventListener('click',() => {
    closeUploadFile();
  });
};

uploadFile.addEventListener('click',() =>{
  openUploadFile();
});

sendFetch(closeUploadFile());

