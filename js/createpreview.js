import { createNewPhotos } from './data.js';


const tamplatePhotos = document.querySelector('#picture').content.querySelector('.picture');
const listPhotos = document.querySelector('.pictures');

/*
const uploadFile =document.querySelector('#upload-file');
const uploadCancel =document.querySelector('#upload-cancel');
const body = document.querySelector('body');
const formaUploadImage = document.querySelector('.img-upload__overlay');
uploadFile.addEventListener('change',() =>{
  body.classList.add('modal-open');
  formaUploadImage.classList.remove('hidden');
});

uploadCancel.addEventListener('change',() => {
  body.classList.remove('modal-open');
  formaUploadImage.classList.add('hidden');
});

document.addEventListener('click',() => {

});*/

const newPhotos = createNewPhotos();


const createPreview = ({url,comments,likes}) => {
  const photoElement = tamplatePhotos.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').innerText = comments.length;
  photoElement.querySelector('.picture__likes').innerText = likes;
  return photoElement;
};

const createPreviews = () => {
  let ListPhotosFragment = document.createDocumentFragment();
  newPhotos.forEach((photo) => {
    ListPhotosFragment.appendChild(createPreview(photo));
  });
  listPhotos.appendChild(ListPhotosFragment);
};
createPreviews();
export {createPreviews};


